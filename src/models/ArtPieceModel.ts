import fnx from 'fnx'
import { AppModel } from '~/models/AppModel'

export class ArtPieceModel extends fnx.Model<AppModel> {
  id = fnx.number
  loaded = fnx.boolean
  visible = fnx.boolean

  @fnx.optional artist? = fnx.string
  @fnx.optional medium? = fnx.string
  @fnx.optional title? = fnx.string
  @fnx.optional yearCreated? = fnx.number
  @fnx.optional yearAquired? = fnx.number
  @fnx.optional description? = fnx.string
  @fnx.optional url? = fnx.string
  @fnx.optional thumbnailImageSrc? = fnx.string
  @fnx.optional imageSrc? = fnx.string

  @fnx.action setLoaded?(loaded: boolean) {
    this.loaded = loaded
  }

  @fnx.action setVisible?(visible: boolean) {
    this.visible = visible
  }

  @fnx.action setDetails?(details: Partial<ArtPieceModel>) {
    this.artist = details.artist
    this.medium = details.medium
    this.title = details.title
    this.yearCreated = details.yearCreated
    this.yearAquired = details.yearAquired
    this.description = details.description
    this.url = details.url
    this.thumbnailImageSrc = details.thumbnailImageSrc
    this.imageSrc = details.imageSrc
  }
}
