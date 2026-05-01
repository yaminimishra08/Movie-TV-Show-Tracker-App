import React, { useEffect, useState } from "react";
import { getTrendingTV, searchTV } from "../api/movies";
import MovieCard from "../components/MovieCard";

function TVShows() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let data;

        if (search.trim() === "") {
          data = await getTrendingTV();
        } else {
          data = await searchTV(search);
        }

        setShows(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load TV shows");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (loading) return <p style={{ padding: "20px" }}>Loading TV shows...</p>;
  if (error) return <p style={{ color: "red", padding: "20px" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>TV Shows</h1>

      <input
        type="text"
        placeholder="Search TV shows..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px"
        }}
      />

      {shows.length === 0 ? (
        <p>No TV shows found</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {shows.map((show) => (
            <MovieCard key={show.id} movie={show} type="tv" />
            ))}
        </div>
      )}
    </div>
  );
}

export default TVShows;