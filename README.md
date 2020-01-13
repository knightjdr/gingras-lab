# Gingras lab website

## Development

```
npm run dev
```

Site will be hosted at `http://localhost:8000/`.

## Update publication list

This will generate a json file with the list of publications in `scripts/publications/output`,
and Gatsby will read publications from there.

```
npm run publications
```

## Build

This will clean Gatsby cache and the `public` folder. The path prefix is currently `gingras-lab` for github hosting.

```
npm run build
```

## Build + deploy

Deploy to `gh-pages`

```
npm run deploy
```
