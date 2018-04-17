# Prettier Config Springload

An importable Prettier configuration for standardised use across projects.

## Installation

```
npm install --save-dev prettier springload-config-prettier
```

## How to use

Create a file at your project’s root called `prettier.config.js`, with the following:

```js
const config = require('prettier-config-springload');

module.exports = config;
```

…and you’re done!
