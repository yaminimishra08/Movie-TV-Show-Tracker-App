// Getting API key from environment variables
// Environment variables help keep sensitive data secure
const API_KEY = process.env.REACT_APP_TMDB_KEY;

// Base URL for TMDB API requests
const BASE_URL = "https://api.themoviedb.org/3";

// Exporting constants so they can be used in other files
export { API_KEY, BASE_URL };