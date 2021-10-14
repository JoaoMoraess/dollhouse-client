import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, loader, ...rest} = props
    return <img {...rest} />
  }
})
