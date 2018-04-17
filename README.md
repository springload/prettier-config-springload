# Prettier Config Springload

An importable Prettier configuration for standardised use across projects.

## Installation

```
npm install --save-dev prettier springload-config-prettier
```

## How to use

Simply create a file at your project root called `prettier.config.js`, with the following:

```js
const config = require('prettier-config-springload');

module.exports = config;
```

… and you’re done!
