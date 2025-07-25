# SGIP Eligibility & Rebate Calculator

This modular web app helps determine eligibility and rebate amounts under California’s Self-Generation Incentive Program (SGIP). It includes a responsive front end and a Node.js backend that scrapes real-time program incentive rates.

## 📁 Structure

- `public/` — front-end UI & JavaScript modules
- `server/` — backend Express API for live SGIP incentive rates

## 🔧 Setup Instructions

### Install Dependencies (backend):
```bash
cd server
npm install
node index.js
```

### Open the Frontend:
```bash
cd ../public
open index.html
```

## 🧠 Modules

- `map.js` — ArcGIS map display + overlays
- `geocode.js` — address to lat/lon conversion
- `eligibility.js` — checks DAC/fire zone status
- `rates.js` — retrieves incentive data from backend
- `ui.js` — updates form & renders results
- `main.js` — orchestrates the entire calculator
