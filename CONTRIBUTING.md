# Contributing

## Installation

```
nvm use
npm install
```

## Building

```
npm run build
```

## Deployment

Deployment is take care of by CircleCI. You must push a new tag, and CircleCI will attempt to publish.

```
npm version x.x.x
git push --follow-tags
```
