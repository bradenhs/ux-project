import ReactiveComponent from 'fnx/react'
import { GridList } from 'material-ui'
import * as React from 'react'
import { style } from 'typestyle'
import { onScroll } from '~/controllers/app'
import { state } from '~/state'
import { GridItemContainer } from '~/views/GridItemContainer'

const artworkGridClassName = style({
  position: 'absolute',
  left: '0',
  right: '0',
  top: '64px',
  bottom: '0',
  overflowY: 'scroll'
})

export const ArtworkGrid = ReactiveComponent(() =>
  <div
    className={ artworkGridClassName }
    onScroll={ onScroll }
  >
    <GridList cols={ state.numCols } padding={ 2 } cellHeight={ 200 }>
      { Object.keys(state.artwork).map(id => <GridItemContainer key={ id } artPieceId={ id }/>) }
    </GridList>
  </div>
)
