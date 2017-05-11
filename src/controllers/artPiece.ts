import { BASE_URL } from '~/config'
import { ArtPieceModel } from '~/models/ArtPieceModel'
import { state } from '~/state'

export function updateArtPieceVisibility(image: ArtPieceModel, visible: boolean) {
  image.setVisible(visible)
  if (visible && image.loaded === false) {
    loadArtPieceDetails(image)
  }
}

async function loadArtPieceDetails(artPiece: ArtPieceModel) {
  state.incrementRequestsInProgress()
  const response = await (await fetch(`${BASE_URL}/sample/art/${artPiece.id}`)).json()
  state.decrementRequestsInProgress()

  artPiece.setDetails({
    artist: response.artist,
    medium: response.medium,
    title: response.title,
    yearCreated: parseInt(response.yearCreated, 10),
    yearAquired: parseInt(response.yearAquired, 10),
    description: response.creditLine,
    url: response.url,
    thumbnailImageSrc: response.thumbnailUrl,
    imageSrc: response.thumbnailUrl.replace('8.jpg', '10.jpg'),
  })
  artPiece.setLoaded(true)
}
