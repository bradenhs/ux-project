import { AppModel } from '~/models/AppModel'
import { getNumCols } from '~/utils/layout'

export const state = new AppModel({
  artwork: { },
  requestsInProgress: 0,
  numCols: getNumCols(),
})
