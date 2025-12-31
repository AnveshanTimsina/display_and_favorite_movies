## Movie Explorer (React + Vite)

Movie Explorer is a lightweight React app that lets you browse popular movies, search titles, and save favorites locally. It uses The Movie Database (TMDB) API for data and persists favorites in the browser via localStorage.

### Features

- Popular movies on load, powered by TMDB
- Search with debuggable results filtering on the client
- Add/remove favorites with persistence in localStorage
- Responsive layout with poster cards and hover favorite control
- Client-side routing for Home and Favorites views

### Tech Stack

- React 19, React Router 7
- Vite 7 for dev/build tooling
- ESLint (React + hooks rules)

### Getting Started

1. Prerequisites: Node 18+ and npm.
2. Install dependencies:

```bash
npm install
```

3. Create an env file (see below) with your TMDB key.
4. Run the dev server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

### Environment Variables

Create `.env.local` in the project root with your TMDB API key:

```bash
VITE_API_KEY=your_tmdb_api_key
```

Vite exposes vars prefixed with `VITE_`, which the API client reads when calling TMDB.

### Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – serve the built app locally
- `npm run lint` – run ESLint

### Project Structure

```text
frontend/
	src/
		App.jsx              # Routes and layout shell
		main.jsx             # Entry point with BrowserRouter
		pages/
			Home.jsx           # Popular movies + search
			Favorites.jsx      # Favorited movies grid
		components/
			NavBar.jsx         # Navigation links
			MovieCard.jsx      # Poster card with favorite toggle
		contexts/
			MovieContext.jsx   # Favorites state + localStorage sync
			MovieContextDef.js # Context definition
			useMovieContext.js # Convenience hook
		services/
			api.js             # TMDB fetch helpers
		css/                 # Page and component styles
```

### How It Works

- Data: `getPopularMovies` and `searchMovies` in [src/services/api.js](src/services/api.js) call TMDB using the `VITE_API_KEY` env variable.
- Favorites: `MovieProvider` in [src/contexts/MovieContext.jsx](src/contexts/MovieContext.jsx) manages favorites, persists to localStorage, and exposes helper methods via [src/contexts/useMovieContext.js](src/contexts/useMovieContext.js).
- UI: `Home` renders search + results, `Favorites` renders saved items, `MovieCard` handles the heart toggle overlay.

### Notes and Future Ideas

- Add pagination or infinite scroll for search results.
- Debounce the search input and surface API errors inline.
- Include movie details (synopsis, rating) and a detail page.
- Add basic tests and CI lint checks.
