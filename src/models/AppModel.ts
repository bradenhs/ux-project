import fnx from 'fnx'
import { includes } from 'lodash'
import { ArtPieceModel } from '~/models/ArtPieceModel'

export class AppModel extends fnx.Model<AppModel> {
  artwork = fnx.mapOf(fnx.object(ArtPieceModel))
  requestsInProgress = fnx.number
  numCols = fnx.number

  @fnx.action setNumCols?(num: number) {
    this.numCols = num
  }

  @fnx.action incrementRequestsInProgress?() {
    this.requestsInProgress++
  }

  @fnx.action decrementRequestsInProgress?() {
    this.requestsInProgress--
  }

  @fnx.action addArtwork?(ids: number[]) {
    ids.forEach(id => {
      this.artwork[id] = {
        id, loaded: false, visible: false,
      }
    })
  }
}
