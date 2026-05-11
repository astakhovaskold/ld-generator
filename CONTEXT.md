# Project Context: `ld-generator`

## Summary

`ld-generator` is a small ESM TypeScript library for generating Schema.org objects in JSON-LD shape. The codebase exposes a set of schema-specific factory functions that return plain JavaScript objects, typically with `@context` and a fixed `@type`, which consumers then serialize with `JSON.stringify(...)`.

The project is intentionally lightweight:

- no runtime dependencies
- one public entrypoint in `src/index.ts`
- one schema module per file under `src/schemas/`
- Rollup build output in `dist/`
- Jest-based unit tests under `__tests__/`

## Purpose

The main use case is embedding structured data into HTML in a typed, composable way.

Example:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify(productSchema(...))}}
/>
```

The library does not generate `<script>` tags or serialized JSON by itself. It returns objects.

## Stack

- Language: TypeScript (`strict: true`)
- Module format: ESM (`"type": "module"`)
- Bundler: Rollup
- Tests: Jest + `ts-jest`
- Package manager lockfile: `package-lock.json`

## Repository Layout

```text
src/
  index.ts
  schemas/
    base.ts
    *.ts
__tests__/
  base.test.ts
  schemas.test.ts
docs/
  README.md
  api.md
  development.md
  superpowers/plans/
dist/
README.md
CONTRIBUTING.md
CONTEXT.md
rollup.config.js
jest.config.cjs
tsconfig.json
```

## Architecture

The dominant implementation pattern is:

1. define a TypeScript interface for one schema
2. optionally import `baseSchema`
3. return a merged object with a fixed `@type` and caller-supplied fields

Representative example:

```ts
export function productSchema(product: Omit<Product, '@context' | '@type'>): Product {
  return {
    ...baseSchema,
    '@type': 'Product',
    ...product,
  };
}
```

This keeps the library easy to extend. Adding another Schema.org type generally means adding one file and re-exporting it from `src/index.ts`.

## Public API

Current exports from `src/index.ts`:

- `productSchema`
- `reviewSchema`
- `createPlaceSchema`
- `organizationSchema`
- `localBusinessSchema`
- `breadcrumbListSchema`
- `FAQPageSchema`
- `createEventSchema`
- `recipeSchema`
- `videoObjectSchema`
- `imageObjectSchema`
- `createPersonSchema`
- `listItemSchema`
- `offerSchema`
- `ratingSchema`
- `postalAddressSchema`
- `contactPointSchema`
- `product`
- `review`
- `place`
- `organization`
- `localBusiness`
- `breadcrumbList`
- `faqPage`
- `event`
- `recipe`
- `videoObject`
- `imageObject`
- `person`
- `listItem`
- `offer`
- `rating`
- `postalAddress`
- `contactPoint`
- `schema`

Supported schema modules:

- `base`
- `breadcrumbList`
- `contactPoint`
- `event`
- `faqPage`
- `imageObject`
- `listItem`
- `localBusiness`
- `offer`
- `organization`
- `person`
- `place`
- `postalAddress`
- `product`
- `rating`
- `recipe`
- `review`
- `videoObject`

## Documentation Structure

Documentation is now split by purpose:

- `README.md`: concise package-facing overview for GitHub and npm
- `docs/README.md`: documentation hub
- `docs/api.md`: detailed exported API notes and examples
- `docs/development.md`: local development and contribution workflow
- `CONTEXT.md`: internal architecture map and maintenance notes

The public API is also split by purpose:

- legacy compatibility exports such as `productSchema`
- preferred short aliases such as `product`
- grouped ergonomic facade via `schema.product(...)`

## Build And Test Status

Verified locally on May 11, 2026:

- `npm test -- --runInBand` passes
- `npm run build` passes

The Jest setup uses `jest.config.cjs` so it can coexist cleanly with the package-wide ESM setting in `package.json`.

## Current Test Coverage

The automated tests currently cover:

- the shared base schema context
- representative schema factories
- nested schema composition
- top-level public exports used through `src/index.ts`

Coverage is still intentionally small, but the test harness is working and aligned with the current repo conventions.

## Important Observations

### 1. The Library Returns Objects, Not JSON Strings

Public docs should always show `JSON.stringify(...)` at the rendering boundary. Treating factory output as already-serialized JSON is incorrect.

### 2. Runtime Shape And Type Declarations Are Not Fully Uniform

Some helpers inject `@context` via `baseSchema`, while others only emit `@type` plus fields.

Notable examples:

- `createPersonSchema(...)` includes `@context`
- `contactPointSchema(...)` includes `@context`
- `ratingSchema(...)` does not include `@context`
- `postalAddressSchema(...)` does not include `@context`

This reflects the current implementation and should be considered part of the package behavior unless intentionally normalized in a future change.

### 3. Naming Is Mixed But Stable

The compatibility layer still uses both styles:

- `productSchema`
- `organizationSchema`
- `createPlaceSchema`
- `createEventSchema`

Those names remain stable for backward compatibility. For new code, the preferred entrypoints are the short aliases like `product`, `organization`, `place`, and `event`.

### 4. Tree Shaking Guidance Matters

The package now exposes both direct named aliases and a grouped facade:

- prefer `import {product, offer} from 'ld-generator'` when bundle size matters
- use `import {schema} from 'ld-generator'` when grouped ergonomics matter more

The grouped facade is intentionally secondary documentation-wise.

### 5. Rollup Config Still Has A Likely Leftover External

`rollup.config.js` still declares:

```ts
external: ['lodash']
```

At the time of analysis:

- `lodash` is not used in the reviewed source files
- `lodash` is not declared in `package.json`
- the package positions itself as dependency-free

This looks like cleanup debt rather than a current blocker.

## Design Characteristics

### Strengths

- minimal API surface
- straightforward extension model
- strict TypeScript configuration
- no runtime dependency footprint
- small and readable source tree

### Limitations

- no runtime validation of Schema.org semantics
- no helper for serialization or script-tag generation
- naming consistency across factories is imperfect
- test coverage is still limited relative to the number of schema modules

## Commands

Useful local commands:

```bash
npm test
npm run build
```

For deterministic debugging output:

```bash
npm test -- --runInBand
```

## Working Assumptions For Future Changes

Anyone changing this repository should assume:

- this is a publishable library package, not an application
- exported function names are compatibility-sensitive
- the source of truth is the code under `src/`
- public docs in `README.md` and `docs/` must stay aligned with `src/index.ts`
- `CONTEXT.md` should describe current reality, not stale historical issues

## Short Practical Takeaway

`ld-generator` is a lightweight TypeScript utility for building Schema.org JSON-LD objects. The codebase is simple and maintainable, the test harness is now functional, and the documentation is split into a concise package README plus detailed guides under `docs/`.
