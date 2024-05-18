const apiKey = '3e148d8095f28369e8bdc230fd723bb7'; // Replace with your actual API key
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=tr-TR`; // Add language parameter for Turkish
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

      const html = `
        <img src="${posterUrl}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p class="release-date">Yayin Tarihi: ${movie.release_date}</p>
        <p class="overview">${overviewText}</p>
      `;

      movieCard.innerHTML = html;
      movieContainer.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Film bilgileri alınırken hata oluştu:', error));
