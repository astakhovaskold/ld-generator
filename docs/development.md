# Development Guide

## Repository Layout

```text
src/
  index.ts
  schemas/
__tests__/
docs/
dist/
```

Key files:

- `src/index.ts`: package entrypoint and public exports
- `src/schemas/*.ts`: schema interfaces and factory functions
- `__tests__/`: Jest test suite
- `rollup.config.js`: library build configuration
- `tsconfig.build.json`: build-only TypeScript config for publishable sources
- `jest.config.cjs`: Jest configuration
- `CONTEXT.md`: architecture and maintenance notes

## Commands

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Build the package:

```bash
npm run build
```

## Testing Notes

- Tests use `jest` with `ts-jest`
- The repository currently uses `*.test.ts` and `*.spec.ts` discovery under `__tests__/`
- Use `npm test -- --runInBand` when you want deterministic single-process output during debugging

## Documentation Structure

- `README.md`: short package-facing overview
- `docs/`: detailed docs
- `CONTEXT.md`: internal project map and technical observations

When updating the public API, keep all three layers aligned.

## Adding A New Schema

Typical steps:

1. Add a new schema file under `src/schemas/`
2. Define the TypeScript interface
3. Export a factory function that injects the fixed `@type`
4. Re-export it from `src/index.ts`
5. Add or extend tests under `__tests__/`
6. Update `docs/api.md` and any relevant examples

## Contribution Workflow

1. Fork the repository
2. Create a feature or fix branch
3. Make focused changes
4. Run `npm test`
5. Run `npm run build`
6. Open a pull request with a clear description

## Current Technical Notes

- The package is ESM (`"type": "module"`)
- Jest uses `jest.config.cjs` to avoid the ESM/CommonJS config mismatch
- Rollup builds against `tsconfig.build.json` so tests are not emitted into `dist`
- `package.json` uses a `files` whitelist to keep the published tarball focused on runtime artifacts
- The project has no declared runtime dependencies
