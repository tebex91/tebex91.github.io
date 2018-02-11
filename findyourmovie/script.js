const endPointBySearch = 'https://api.themoviedb.org/3/search/movie?',
      endPointPopular = 'https://api.themoviedb.org/3/movie/popular?',
      endPointTopRated = 'https://api.themoviedb.org/3/movie/top_rated?',
      endPointUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?',
      apiKey = 'api_key=f24a0fd18f52218851075901c5a108a0',
      gallery = document.querySelector('.gallery'),
      form = document.querySelector('.searchForm'),
      input = document.querySelector('#searchInput'),
      templateSource = document.querySelector('#movieCardTemplate').textContent.trim(),
      popularBtn = document.querySelector('#popular'),
      topRatedBtn = document.querySelector('#topRated'),
      upcomingBtn = document.querySelector('#upcoming'),
      lightThemeBtn = document.querySelector('#lightThemeBtn'),
      darkThemeBtn = document.querySelector('#darkThemeBtn');

const fetchMovies  = (endPoint, query='') =>
  fetch(`${endPoint}${apiKey}${query}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('error while fetching, ' + response.statusText);
    })
    .then(data => {
      const movies = getInfo(data.results);
      console.log(movies);
      if(movies.length !== 0) {
        renderMovieGallery(movies, complied, gallery);
      } else {
        gallery.innerHTML = `<p class="errorMessage">Sorry, nothing was found.</p>`;
      }
    })
    .catch(err => console.log(err));

const getInfo = (movies) =>
  movies.map(movie => ({
    poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    title: movie.title,
    overview: `${movie.overview.substring(0, 100)}...`,
    release: movie.release_date.substring(0, 4),
    rating: movie.vote_average
  }))

const complied = _.template(templateSource);

  const renderMovieGallery = (movies, template, parent) => {
    let htmlString = '';
    movies.forEach(movie => {
      htmlString += template(movie);
    });

  parent.innerHTML = htmlString;
};

fetchMovies(endPointPopular);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input.value) {
    let query = `&query=${input.value.trim().split(' ').join('+')}`;
    fetchMovies(endPointBySearch, query);
  } else {
    gallery.innerHTML = `<p class="errorMessage">Please, enter movie name.</p>`;
  }

  input.value = '';
  });

popularBtn.addEventListener('click', (evt) => {
  fetchMovies(endPointPopular);
});

topRatedBtn.addEventListener('click', (evt) => {
  fetchMovies(endPointTopRated);
});

upcomingBtn.addEventListener('click', (evt) => {
  fetchMovies(endPointUpcoming);
});

const setTheme = (theme) => {
    let styleLink = document.querySelector('#styleLink');
    styleLink.setAttribute('href', `${theme}-theme.css`);
    if (theme === 'light') {
        localStorage.setItem('theme', 'light');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
    } else {
        localStorage.setItem('theme', 'dark');
        lightThemeBtn.classList.remove('active');
        darkThemeBtn.classList.add('active');
    }
}

lightThemeBtn.addEventListener('click', (evt) => {
    setTheme('light');
});
darkThemeBtn.addEventListener('click', (evt) => {
    setTheme('dark');
});
