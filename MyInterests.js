const apiKey = '3e148d8095f28369e8bdc230fd723bb7';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const movieContainer = document.getElementById('movie-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const top10Movies = data.results.slice(0, 10); 
    top10Movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const html = `
      <img src="${posterUrl}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Release Date: ${movie.release_date}</p>
      <div class="overview">
        <p>${movie.overview}</p>  
      </div>
    `;

      movieCard.innerHTML = html;
      movieContainer.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Error fetching movies:', error));
