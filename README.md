# cache-action

> Intelligent dependency caching for GitHub Actions

## Usage

```yaml
- uses: CementBeetleSteeple/cache-action@v2
  with:
    cache-key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    cache-paths: |
      ~/.npm
      node_modules
    restore-keys: |
      ${{ runner.os }}-node-
```

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `cache-key` | Yes | Primary cache key |
| `cache-paths` | Yes | Paths to cache |
| `restore-keys` | No | Fallback keys |

## License

MIT

## v2.0.0 - Breaking changes:  now in MB
