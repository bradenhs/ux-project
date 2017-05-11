import ReactiveComponent from 'fnx/react'
import { CircularProgress, GridTile } from 'material-ui'
import * as React from 'react'
import { ArtPieceModel } from '~/models/ArtPieceModel'
import { state } from '~/state'
import { Img } from '~/views/Img'

export const GridItem = ReactiveComponent(({ artPiece }: { artPiece: ArtPieceModel }) =>
  <span onTouchTap={ () => window.open(artPiece.url) }>
    <GridTile
      title={ artPiece.title }
      titlePosition='top'
      subtitle={ 'by ' + artPiece.artist }
      style={ { background: '#222' } }
      titleBackground={
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)'
      }
    >
      <Img src={ artPiece.thumbnailImageSrc } />
    </GridTile>
  </span>
)
