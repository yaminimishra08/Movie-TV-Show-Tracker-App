import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-red-600 text-2xl font-bold">MovieTracker</h1>

      <nav className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tv">TV Shows</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>
    </header>
  );
}

export default Header;