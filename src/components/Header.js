import { NavLink } from "react-router-dom";

// Header component
function Header() {

  return (

    // Header section
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center">

      {/* Website Logo / Title */}
      <h1 className="text-red-600 text-2xl font-bold">
        MovieTracker
      </h1>

      {/* Navigation Menu */}
      <nav className="flex gap-6">

        {/* Navigation link to Home page */}
        <NavLink to="/">Home</NavLink>

        {/* Navigation link to Movies page */}
        <NavLink to="/movies">Movies</NavLink>

        {/* Navigation link to TV Shows page */}
        <NavLink to="/tv-shows">TV Shows</NavLink>

        {/* Navigation link to Watchlist page */}
        <NavLink to="/watchlist">Watchlist</NavLink>

      </nav>

    </header>
  );
}

// Export Header component
export default Header;