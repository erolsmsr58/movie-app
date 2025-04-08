# Movie App

## Getting Started

Follow the steps below to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/erolsmsr58/movie-app.git
cd movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key for the IMDB API

1. Open the file `.example.env`.
2. Replace `[insert your IMDB API key here]` with your API key.
3. Save the file as `.env`.

### 4. Start the development server
```bash
npm run dev
```

This will launch the app locally using Vite.

> **_NOTE:_**  The app should now be running at http://localhost:5173.

## Testing

Because of complications with certain dependencies, adding unit tests was too time consuming to achieve within
the given timeframe. Therefore, I have decided to add end-to-end tests with Playwright.

### Run Playwright tests in the console:

- First, you need to start the development server: `npm run dev`.
- To run Playwright in the console, run `npm run test:e2e`.
- To run the tests visually with the Playwright Chromium UI, run `npm run test:e2e-ui`.

## Tech Stack

- React
- TypeScript
- Chakra UI
- React Router DOM
- React Query
- Zustand
- Vite

## Environment

- Node.js: v20.14.0
- NPM: v10.7.0

For exact dependency versions, check [package.json](https://github.com/erolsmsr58/movie-app/blob/master/package.json).

## Deployment
To build the project for production:

```bash
npm run build
```

Then preview the build locally:

```bash
npm run preview
```
