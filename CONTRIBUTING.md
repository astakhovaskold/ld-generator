# Contributing to ld-generator

## Before You Open A Pull Request

1. Fork the repository.
2. Create a focused branch such as `feature/<name>` or `bugfix/<name>`.
3. Make the smallest change that solves the problem cleanly.
4. Run the local verification commands:

```bash
npm test
npm run build
```

## Documentation To Read

- [Development guide](./docs/development.md)
- [API reference](./docs/api.md)
- [Project context](./CONTEXT.md)

## Contribution Guidelines

- Keep exported API names stable unless the change is intentional and documented.
- Add or update tests for behavior changes.
- Update `README.md` and `docs/` when public usage changes.
- Prefer small, reviewable pull requests over bundled refactors.

## Reporting Issues

When opening an issue, include:

- what you expected
- what happened instead
- a minimal reproduction if possible
- relevant logs or error messages

## License

By contributing, you agree that your contributions will be licensed under the repository's [MIT license](./LICENSE.md).
