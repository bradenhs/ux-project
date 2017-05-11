// Do this first to make sure Promises are available to everything
import * as es6Promise from 'es6-promise'

// Polyfill Promise globally
es6Promise.polyfill()

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import { cssRaw } from 'typestyle'
import { initializeApp } from '~/controllers/app'
import { App } from '~/views/App'

injectTapEventPlugin()

// Add base styling
cssRaw(`
  body {
    margin: 0;
    font-family: Roboto;
    background: #111;
  }
`)

initializeApp()

ReactDOM.render(<App/>, document.querySelector('#app'))
