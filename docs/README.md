# Documentation

This directory contains the detailed project documentation for `ld-generator`.

## Start Here

- [API reference](./api.md): exported factory functions, behavior notes, and examples
- [Development guide](./development.md): repository layout, commands, test workflow, and contribution notes
- [Project context](../CONTEXT.md): high-level architecture and maintenance notes

## What The Library Does

`ld-generator` provides small TypeScript factory functions for building Schema.org objects in JSON-LD shape. It does not inject `<script>` tags or serialize payloads for you; consumers should call `JSON.stringify(...)` when rendering the object into HTML.

The public API now has three layers:

- legacy compatibility exports such as `productSchema` and `createEventSchema`
- short aliases such as `product`, `offer`, and `event`
- grouped facade access through `schema.product(...)`

## Documentation Principles

- `README.md` stays short and package-facing
- `docs/` contains the detailed usage and maintenance documentation
- `CONTEXT.md` documents repository-level architecture and technical observations
