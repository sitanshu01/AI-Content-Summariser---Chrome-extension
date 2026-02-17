# AI Webpage Content Summarizer (Chrome Extension)

An AI-powered Chrome Extension that extracts webpage content and generates concise summaries using **Puppeteer** for scraping and **Google Gemini API** for AI summarization.

---

## Features

* Summarize any webpage with one click
* Extracts relevant text content automatically
* AI-generated clean summaries (200–400 words)
* Chrome Extension popup interface
* Node.js backend for scraping and AI processing

---

## Project Structure

```
project-root/
│
├── backend/                 # Express + Puppeteer + Gemini API
│   ├── src/
│   ├── package.json
│   └── .env
│
├── extension/               # Chrome extension (Vite build)
│   ├── popup/
│   ├── public/
│   │    └── manifest.json
│   ├── dist/                # Built extension (load in Chrome)
│   └── package.json
│
└── README.md
```

---

## Requirements

* Node.js >= 18
* pnpm / npm
* Chrome browser
* Gemini API Key

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/content-summarizer-extension.git
cd content-summarizer-extension
```

---

### 2. Backend Setup

```bash
cd backend
pnpm install
```

Create `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

Install Puppeteer browser:

```bash
npx puppeteer browsers install chrome
```

Run backend:

```bash
pnpm dev
```

Server runs at:

```
http://localhost:3000
```

---

### 3. Extension Setup

```bash
cd ../extension
pnpm install
pnpm build
```

This generates:

```
extension/dist/
```

---

### 4. Load Extension in Chrome

1. Open Chrome
2. Go to:

```
chrome://extensions
```

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select:

```
extension/dist
```

---

## Usage

1. Open any webpage
2. Click the extension icon
3. Click **Summarize**
4. View AI-generated summary instantly

---

## Tech Stack

* Chrome Extensions Manifest V3
* Node.js + Express
* Puppeteer (Web scraping)
* Google Gemini API
* Vite (Extension bundling)
* TypeScript

---

## Future Improvements

* Summary length controls
* Highlight key points
* Multi-language summarization
* Deploy backend to cloud

---

## License

MIT License
