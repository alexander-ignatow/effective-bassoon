# Client

This package contains the React and Vite frontend for the quote generator demo.

## Scripts

```bash
npm run dev
npm run build
npm run test
npm run lint
```

## Environment

Create `client/.env.local` from `client/.env.example` for local development.

```bash
cp client/.env.example client/.env.local
```

Required values:

- `VITE_API_URL`
- `VITE_API_TOKEN`

The browser client requires both values at startup. If `VITE_API_TOKEN` is missing, the UI disables quote generation and shows a configuration error.
