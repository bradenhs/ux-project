import ReactiveComponent from 'fnx/react'
import { AppBar, GridList, GridTile, LinearProgress } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as React from 'react'
import { state } from '~/state'
import { ArtworkGrid } from '~/views/ArtworkGrid'

const theme = getMuiTheme({
  palette: {
    primary1Color: '#222'
  }
})

export const App = ReactiveComponent(() =>
  <MuiThemeProvider muiTheme={ theme }>
    <div>
      <LinearProgress
        style={ {
          position: 'absolute',
          zIndex: 99000,
          transition: 'all ease 1s',
          opacity: state.requestsInProgress > 0 ? 1 : 0,
          background: 'transparent',
          height: '2px'
        } }
        color='#444'
      />
      <AppBar
        showMenuIconButton={ false }
        title='The Tate Gallery'
      />
      <ArtworkGrid/>
    </div>
  </MuiThemeProvider>
)
