import { API_KEY, BASE_URL } from "./config";

// Trending Movies
export const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch movies");

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Search Movies
export const searchMovies = async (query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (!res.ok) throw new Error("Search failed");

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Movie Details
export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch details");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Movie Cast (REQUIRED)
export const getMovieCredits = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.cast || [];
  } catch {
    return [];
  }
};

// Trending TV
export const getTrendingTV = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch TV");

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Search TV
export const searchTV = async (query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`
    );
    if (!res.ok) throw new Error("Search failed");

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// TV Details
export const getTVDetails = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch details");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// TV Cast (REQUIRED)
export const getTVCredits = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.cast || [];
  } catch {
    return [];
  }
};  