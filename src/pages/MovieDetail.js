import React, { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";
import { toast } from "react-toastify";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;

        if (search.trim() === "") {
          data = await getTrendingMovies();
          setMovies(data.slice(0, 12));
        } else {
          data = await searchMovies(search);
          setMovies(data);
        }
      } catch {
        toast.error("Failed to fetch movies");
      }
    };

    fetchData();
  }, [search]);

  const filteredMovies = movies.filter((movie) =>
    (movie.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trending Movies</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px"
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {filteredMovies.length === 0 && <p>No movies found</p>}
    </div>
  );
}

export default Home;