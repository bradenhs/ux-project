import { throttle } from 'lodash'
import { BASE_URL } from '~/config'
import { state } from '~/state'
import { getNumCols } from '~/utils/layout'

const INTERVAL = 200
let i = 0
let ids: number[]

export async function initializeApp() {
  window.addEventListener('resize', throttle(updateNumCols, 250))

  state.incrementRequestsInProgress()

  const response: string[] = await (await fetch(`${BASE_URL}/sample/art`)).json()

  state.decrementRequestsInProgress()

  ids = response.map(id => parseInt(id, 10)).sort((a, b) => a > b ? 1 : -1)

  addArtwork()
}

function addArtwork() {
  state.addArtwork(ids.slice(i, i + INTERVAL))
  i += INTERVAL
}

function updateNumCols() {
  state.setNumCols(getNumCols())
}

export function onScroll(e: any) {
  if (e.target.scrollTop === e.target.scrollHeight - e.target.offsetHeight && i < ids.length) {
    addArtwork()
  }
}
