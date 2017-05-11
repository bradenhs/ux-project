import ReactiveComponent from 'fnx/react'
import { CircularProgress, GridTile } from 'material-ui'
import * as React from 'react'
import * as VisiblitySensor from 'react-visibility-sensor'
import { updateArtPieceVisibility } from '~/controllers/artPiece'
import { ArtPieceModel } from '~/models/ArtPieceModel'
import { state } from '~/state'
import { GridItem } from '~/views/GridItem'

export const GridItemContainer = ReactiveComponent((props: { artPieceId: string }) => {
  const artPiece = state.artwork[props.artPieceId]
  return <VisiblitySensor
    partialVisibility={ true }
    onChange={ visible => updateArtPieceVisibility(artPiece, visible) }
    key={ artPiece.id }
  >
    { artPiece.visible && artPiece.loaded ? <GridItem artPiece={ artPiece }/> : <GridTile/> }
  </VisiblitySensor>
})
