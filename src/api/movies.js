import { API_KEY, BASE_URL } from "./config";

// =========================================
// Fetch Trending Movies
// =========================================
export const getTrendingMovies = async () => {
  try {

    // API request for trending movies of the day
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );

    // Check if request failed
    if (!res.ok) throw new Error("Unable to load movies");

    // Convert response into JSON
    const movieData = await res.json();

    // Return movie list or empty array
    return data.results || [];

  } catch (error) {

    // Log error in console
    console.error(error);

    // Return empty array if error occurs
    return [];
  }
};


// =========================================
// Search Movies
// =========================================
export const searchMovies = async (query) => {
  try {

    // API request for searching movies
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    // Check if request failed
    if (!res.ok) throw new Error("Movie search request failed");

    // Convert response into JSON
    const data = await res.json();

    // Return search results
    return data.results || [];

  } catch (error) {

    // Log error
    console.error(error);

    // Return empty array on error
    return [];
  }
};


// =========================================
// Fetch Movie Details
// =========================================
export const getMovieDetails = async (id) => {
  try {

    // API request for movie details using movie ID
    const res = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    // Check if request failed
    if (!res.ok) throw new Error("Could not fetch movie details");

    // Convert response into JSON
    const data = await res.json();

    // Return movie details
    return data;

  } catch (error) {

    // Log error
    console.error(error);

    // Return null if error occurs
    return null;
  }
};


// =========================================
// Fetch Movie Cast
// =========================================
export const getMovieCredits = async (id) => {
  try {

    // API request for movie cast details
    const res = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );

    // Convert response into JSON
    const data = await res.json();

    // Return cast array
    return data.cast || [];

  } catch (error) {
  console.error("Credits Fetch Error:", error);

    // Return empty array if request fails
    return [];
  }
};


// =========================================
// Fetch Trending TV Shows
// =========================================
export const getTrendingTV = async () => {
  try {

    // API request for trending TV shows of the week
    const res = await fetch(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
    );

    // Check if request failed
    if (!res.ok) throw new Error("Failed to fetch TV");

    // Convert response into JSON
    const data = await res.json();

    // Return TV shows list
    return data.results || [];

  } catch (error) {

    // Log error
    console.error(error);

    // Return empty array if error occurs
    return [];
  }
};


// =========================================
// Search TV Shows
// =========================================
export const searchTV = async (query) => {
  try {

    // API request for searching TV shows
    const res = await fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`
    );

    // Check if request failed
    if (!res.ok) throw new Error("Search failed");

    // Convert response into JSON
    const data = await res.json();

    // Return search results
    return data.results || [];

  } catch (error) {

    // Log error
    console.error(error);

    // Return empty array if request fails
    return [];
  }
};


// =========================================
// Fetch TV Show Details
// =========================================
export const getTVDetails = async (id) => {
  try {

    // API request for TV show details using ID
    const res = await fetch(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}`
    );

    // Check if request failed
    if (!res.ok) throw new Error("Failed to fetch details");

    // Convert response into JSON
    const data = await res.json();

    // Return TV details
    return data;

  } catch (error) {

    // Log error
    console.error(error);

    // Return null if request fails
    return null;
  }
};


// =========================================
// Fetch TV Show Cast
// =========================================
export const getTVCredits = async (id) => {
  try {

    // API request for TV cast details
    const res = await fetch(
      `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`
    );

    // Convert response into JSON
    const data = await res.json();

    // Return cast array
    return data.cast || [];

  } catch {

    // Return empty array if request fails
    return [];
  }
};