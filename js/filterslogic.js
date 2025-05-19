
let selectedCategory = "All";
let selectedYear = "All";

function filterMovies() {
  const movies = document.querySelectorAll(".movie-card");

  movies.forEach(movie => {
    const movieCategory = movie.dataset.category;
    const movieYear = movie.dataset.year;

    const categoryMatch = selectedCategory === "All" || movieCategory === selectedCategory;
    const yearMatch = selectedYear === "All" || movieYear === selectedYear;

    if (categoryMatch && yearMatch) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

document.querySelectorAll('[data-category]').forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    selectedCategory = item.getAttribute("data-category");
    filterMovies();
  });
});

document.querySelectorAll('[data-year]').forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    selectedYear = item.getAttribute("data-year");
    filterMovies();
  });
});
