import React from 'react'
import { UseMailTo } from 'use-mail-to'

const App = () => {
  return (
    <UseMailTo email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
      Mail me!
    </UseMailTo>
  )
}

export default App
