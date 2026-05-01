import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTVDetails } from "../api/movies";
import { useWatchlist } from "../context/WatchlistContext";

function TVDetail() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTVDetails(id);
        setShow(data);
      } catch (err) {
        setError("Failed to load TV show");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Loading
  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;

  // Error
  if (error) return <p style={{ color: "red", padding: "20px" }}>{error}</p>;

  // Safety check
  if (!show) return null;

  const isAdded = watchlist.find((item) => item.id === show.id);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "30px" }}>
        
        {/* Poster */}
        <img
          src={
            show.poster_path
              ? `https://image.tmdb.org/t/p/w300${show.poster_path}`
              : "https://via.placeholder.com/300"
          }
          alt={show.name}
          style={{ width: "300px", borderRadius: "10px" }}
        />

        {/* Details */}
        <div>
          <h1>{show.name}</h1>

          <p><strong>Overview:</strong> {show.overview}</p>

          <p><strong>First Air Date:</strong> {show.first_air_date}</p>

          <p><strong>Rating:</strong> {show.vote_average}</p>

          <p>
            <strong>Genres:</strong>{" "}
            {show.genres && show.genres.length > 0
              ? show.genres.map((g) => g.name).join(", ")
              : "N/A"}
          </p>

          <button
            onClick={() =>
              isAdded
                ? removeFromWatchlist(show.id)
                : addToWatchlist(show)
            }
            style={{ padding: "10px", marginTop: "10px" }}
          >
            {isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default TVDetail;