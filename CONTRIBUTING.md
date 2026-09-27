# Contributing

Keep changes small, reviewable, and consistent with the existing client and server structure.

## Workflow

1. Install dependencies at the repository root with `npm install`.
2. Create the required environment files from the examples before running locally.
3. Make changes in `client/src` for the React app and `server/src` for the Express API.
4. Run the relevant checks before opening a pull request.

## Checks

From the repository root:

```bash
npm run lint
npm run build
npm run test
```

You can also run package-specific commands with `--prefix client` or `--prefix server` when only one side changed.

## Project Notes

- Keep generated artifacts out of version control.
- Prefer clear names and small functions over clever abstractions.
- Keep UI code, hooks, and utilities in their existing folders unless there is a clear reason to restructure.
- Keep server request handling thin and move business logic into `server/src/services`.
- Use environment variables for ports, client origin, and API tokens instead of hardcoding environment-specific values.

## Pull Requests

- Describe the behavior change briefly.
- Mention any environment or Docker changes explicitly.
- Include screenshots only when the UI changed.

