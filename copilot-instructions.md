# Copilot Instructions for AI Agents

## Project Overview
- **Deepfake Defender** is a web app for detecting manipulated media (image, video, audio).
- The project is split into two main parts:
  - `frontend/` (currently empty): Intended for client-side code. The main UI is in `index.html` at the project root.
  - `backend/`: Node.js Express server (`app.js`) for handling API requests.

## Key Files & Structure
- `index.html`: Main UI, includes all client logic and styles. Handles file upload, preview, and analysis requests.
- `backend/app.js`: Express server. Provides two endpoints:
  - `GET /`: Health check, returns a simple message.
  - `POST /submit`: Receives JSON data from frontend, logs it, and responds with a confirmation.
- No build system or test framework is present by default.

## Developer Workflows
- **Start backend:**
  - `cd backend`
  - `node app.js` (runs on port 3000)
- **Frontend:**
  - Open `index.html` directly in a browser for static UI.
  - The frontend expects a backend at `http://127.0.0.1:8000/analyze` (update `BACKEND_URL` in `index.html` if backend runs elsewhere).
- **API Integration:**
  - The current backend does NOT implement `/analyze`. To connect the UI, add an `/analyze` endpoint in `backend/app.js` that accepts file uploads (e.g., using `multer`).

## Patterns & Conventions
- **Backend:**
  - Uses Express with JSON body parsing.
  - All new API endpoints should be added to `backend/app.js`.
- **Frontend:**
  - All logic is in `index.html` (no separate JS/CSS files yet).
  - UI expects to POST files to `/analyze` and receive `{ safe_pct, fake_pct, summary }` JSON.
- **No database or authentication** is present.

## Integration Points
- **To enable real analysis:**
  - Implement `/analyze` in the backend to accept file uploads and return the expected JSON structure.
  - Update `BACKEND_URL` in `index.html` if backend runs on a different port or path.

## Example: Adding an /analyze Endpoint
```js
// In backend/app.js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/analyze', upload.single('file'), (req, res) => {
  // TODO: Add analysis logic here
  res.json({ safe_pct: 95, fake_pct: 5, summary: 'Sample analysis.' });
});
```

## Summary
- Keep backend logic in `backend/app.js`.
- UI logic is in `index.html`.
- Update integration points as needed for new features.
- No special build/test steps required.
