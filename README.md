# React Use Mail To

> Renders a link formatted to send an email (mailto: link).

[![NPM](https://img.shields.io/npm/v/use-mail-to.svg)](https://www.npmjs.com/package/use-mail-to) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-mail-to
```

## Usage

```jsx
import React from 'react'

import { UseMailTo } from 'use-mail-to'

const App = () => {
  return (
    <UseMailTo email="foo@bar.baz" subject="Welcome" body="Hello world!">
      Mail me!
    </UseMailTo>
  )
}

export default App

```

## License

MIT © [saidMounaim](https://github.com/saidMounaim)