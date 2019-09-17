# Gingras lab website

## Development

```
npm run develop
```

Site will be hosted at `http://localhost:8000/`.

## Build

This will clean Gatsby cache and the `public` folder. The path prefix is currently `gingras-lab-gatsby` for github hosting.

```
npm run build
```

## Update publication list

This will generate a json file with the list of publications in `scripts/publications/output`,
and Gatsby will read publications from there.

```
npm run publications
```
