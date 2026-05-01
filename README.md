# Movie & TV Show Tracker App

## 📌 Project Overview

This project is a Movie & TV Show Tracker application built using ReactJS.
It allows users to search for movies/TV shows, view detailed information, and maintain a personal watchlist using data from the TMDB API.

The app focuses on real-world React concepts like API integration, routing, global state management, and persistent storage using localStorage.

---

## 🧱 Application Structure

The application follows a modular, component-based architecture.

### Core Components
* Header Component
 - Contains navigation links (Home, Movies, TV Shows, Watchlist, Search)
 - Includes search bar and responsive menu
* Footer Component
 - Displays basic app info / copyright
* MovieCard / TvShowCard
 - Displays poster, title, rating, and release year.
 - Clickable to navigate to detail page
* SearchBar Component
 - Controlled input field
 - Triggers API search requests
* LoadingSpinner Component
 - Displays loading state during API calls
* ErrorMessage Component
 - Displays API or network errors in a user-friendly way

--- 

## 🧠 State Management
* Context API
 * WatchlistContext
   -  Manages global watchlist state
   - Provides addToWatchlist and removeFromWatchlist
   - Syncs data with localStorage for persistence

---

## 🎨 Styling & Design Approach
* Styled using Tailwind CSS
* Dark cinematic theme for media-focused UI
* Card-based layout for movies and shows
* Hover effects for better interactivity
* Clean spacing and consistent typography

---

## 📱 Responsiveness
* Fully responsive layout
* Grid system adapts for:
 - Mobile (1–2 columns)
 - Tablet (2–3 columns)
 - Desktop (4–6 columns)
* Navigation collapses into mobile-friendly layout

--- 

## 🌟 Key Features

* 🔍 Search Functionality
 - Search movies and TV shows using TMDB API
 - Instant results with keyword input

* 🎬 Movie & TV Show Browsing
 - Separate pages for Movies and TV Shows
 - Displays popular and trending content

* 📄 Detail Pages
 * Dynamic routes:
  - /movie/:id
  - /tv-show/:id

* Shows:
 - Poster
 - Overview
 - Genres
 - Rating
 - Release date

* ⭐ Watchlist Feature
 - Add/remove movies or shows
 - Stored using localStorage
 - Persistent across sessions
 - Dedicated /watchlist page

* ⚠️ User Feedback System
 * Loading indicators during API calls
 * Error messages for failed requests
 * Toast notifications for actions like:
 - Added to watchlist
 - Removed from watchlist

---

## ⚡ Performance Optimization
* React.memo used for MovieCard/TvShowCard to prevent unnecessary re-renders
* Optimized API calls using useEffect dependencies
* Efficient state updates using Context API

---

## 🔌 API Integration
* Integrated with TMDB API
* Used endpoints for:
 - Trending movies/shows
 - Search results
 - Detailed information by ID
* API key stored securely in .env file
* Async handling using async/await

--- 

## 🚏 Routing System
* Implemented using React Router DOM:
 - / → Home page
 - /movies → Movies listing
 - /tv-shows → TV shows listing
 - /movie/:id → Movie details
 - /tv-show/:id → TV show details
 - /watchlist → Saved items
* Navigation handled using:
 - <Link> for declarative routing
 - useNavigate for programmatic redirects

--- 

## 🚀 How It Works

* User lands on homepage
* Browses trending content or searches for a title
* Selects a movie/TV show
* Views detailed information
* Adds/removes from watchlist
* Data persists using localStorage

---

## 🗂 Repository Structure
* src/
 - api/
 - components/
 - context/
 - pages/
* App.js → Main entry point
* Routes configured using React Router

The project follows the Git workflow:  
`dev` → `stage` → `main`

---

## 🚀 Technologies Used

* ReactJS (Functional Components)
* React Hooks (useState, useEffect)
* React Router DOM
* Context API
* TMDB API
* Tailwind CSS
* JavaScript (ES6+)

---

## ▶️ Getting Started
1. Install Dependencies
* npm install
2. Setup Environment Variable
* Create .env file:
 - REACT_APP_TMDB_API_KEY=your_api_key_here
3. Run Project
npm start
4. http://localhost:5173

---

## 🔗 Connect With Me
- LinkedIn: [www.linkedin.com/in/yaminimishra0804](https://www.linkedin.com/in/yaminimishra0804)  
- GitHub: [https://github.com/yaminimishra08](https://github.com/yaminimishra08)

---

## 📎 Submission
* This project demonstrates practical implementation of:
 - API integration (TMDB)
 - React Router navigation
 - Global state management (Context API)
 - Persistent storage (localStorage)
 - Responsive UI with Tailwind CSS
* The architecture follows a clean and scalable structure suitable for production-level React applications.
* The project follows the Git workflow: `dev → stage → main`.
