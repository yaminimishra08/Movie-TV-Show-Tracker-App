import React, { useEffect, useState } from "react";
import { searchMovies } from "../api/movies";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
        <div className="flex flex-wrap gap-6"></div>
      <h1>Movies Page</h1>

      <input
      className="w-full p-3 mb-6 bg-gray-800 rounded"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

