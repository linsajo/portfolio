# Linsa Portfolio — React + Vite

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, normally http://localhost:5173.

## Customize

- Main content: `src/App.jsx`
- Skills and projects: `src/data.js`
- Design and responsive styling: `src/styles.css`
- Profile photo: `public/profile.png`
- Downloadable CV: `public/Linsa-Lison-CV.pdf`

Replace every project link set to `#` with the real live demo and GitHub repository URL.

## Build

```bash
npm run build
npm run preview
```

The production files will be generated in `dist/`.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Sign in to Vercel using GitHub.
3. Select **Add New → Project**.
4. Import the repository.
5. Vercel detects Vite automatically.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Click **Deploy**.

## Deploy to Netlify

1. Push the project to GitHub.
2. Sign in to Netlify.
3. Choose **Add new site → Import an existing project**.
4. Select the GitHub repository.
5. Build command: `npm run build`.
6. Publish directory: `dist`.
7. Deploy the site.
