const apiKey = '3e148d8095f28369e8bdc230fd723bb7'; // Replace with your actual API key
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const movieContainer = document.getElementById('movie-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const top10Movies = data.results.slice(0, 10); // Get top 10 movies
    top10Movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const overviewText = movie.overview;
      const overviewHtml = `<p class="overview">${overviewText}</p>`;
      const truncatedOverviewHtml = `
        <p class="overview-truncated">${overviewText} <span class="read-more">Read More</span></p>
        <p class="overview-full" style="display: none;">${overviewText} <span class="read-less">Read Less</span></p>
      `;
      const html = `
        <img src="${posterUrl}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>Release Date: ${movie.release_date}</p>
        ${overviewHtml}
      `;
      movieCard.innerHTML = html;
      movieContainer.appendChild(movieCard);

      // Check if overview text exceeds four lines
      const overviewElement = movieCard.querySelector('.overview');
      if (overviewElement.clientHeight > 80) { // Assuming 20px per line, 20px * 4 lines = 80px
        movieCard.innerHTML = `
          <img src="${posterUrl}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>Release Date: ${movie.release_date}</p>
          ${truncatedOverviewHtml}
        `;
      }
    });

    // Add event listeners for "Read More" and "Read Less"
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', function() {
        const movieCard = this.closest('.movie-card');
        movieCard.querySelector('.overview-truncated').style.display = 'none';
        movieCard.querySelector('.overview-full').style.display = 'block';
      });
    });

    document.querySelectorAll('.read-less').forEach(button => {
      button.addEventListener('click', function() {
        const movieCard = this.closest('.movie-card');
        movieCard.querySelector('.overview-full').style.display = 'none';
        movieCard.querySelector('.overview-truncated').style.display = 'block';
      });
    });
  })
  .catch(error => console.error('Error fetching movies:', error));
