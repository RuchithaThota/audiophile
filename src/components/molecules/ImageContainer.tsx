import { ImageAsset } from '../../models/Product'

interface ImageContainerProps {
    image: ImageAsset[],
    name: string
}
function ImageContainer({ image, name }: ImageContainerProps): JSX.Element {
    return (
        <picture>
            <source media='(min-width: 1024px)' srcSet={image[2].url} />
            <source media='(min-width: 768px)' srcSet={image[1].url} />
            <img src={image[0].url} alt={name} className='rounded-lg' />
        </picture>
    )
}

export default ImageContainer