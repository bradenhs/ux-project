import ReactiveComponent from 'fnx/react'
import * as React from 'react'
import { classes, style } from 'typestyle'

interface Props {
  src: string
}

interface State {
  loaded: boolean
}

export class Img extends ReactiveComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    const image = new Image()
    image.src = this.props.src
    image.onload = () => this.setState({ loaded: true })
  }

  render() {
    return <div className={ this.getClassName() } />
  }

  getClassName() {
    return classes(
      style({
        backgroundImage: `url('${this.props.src}')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        transition: 'all ease 1s',
      }),
      style({
        opacity: this.state.loaded ? 1 : 0
      })
    )
  }
}
