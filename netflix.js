
const getMoviesByGenre = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=e4bc6aa8ad4101c54d48ced2f8e3f48a")
    .then(res => res.Json())
    .then(data => console.log(data))
}

const getGenre = (data) => {
    
}


