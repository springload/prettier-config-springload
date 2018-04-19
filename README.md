# Prettier Config Springload ![npm](https://img.shields.io/npm/v/prettier-config-springload.svg) ![license](https://img.shields.io/github/license/springload/prettier-config-springload.svg) ![CircleCI](https://img.shields.io/circleci/project/github/springload/prettier-config-springload.svg)

An importable Prettier configuration for standardised use across projects.

## Installation

```
npm install --save-dev prettier prettier-config-springload
```

## How to use

Create a file at your project’s root called `prettier.config.js`, with the following:

```js
const config = require('prettier-config-springload');

module.exports = config;
```

…and you’re done!

# Contributing / Development

See [CONTRIBUTING.md](CONTRIBUTING.md).

# License

[MIT](LICENSE).
