import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ProductImage } from '../../models/Product'

interface ImageContainerProps {
    image: ProductImage,
    placeholderImage: ProductImage,
    name: string
}
function ImageContainer({ image, placeholderImage, name }: ImageContainerProps): JSX.Element {
    return (
        <>
            <div className="md:hidden">
                <LazyLoadImage
                    alt={name}
                    src={image.mobile}
                    placeholderSrc={placeholderImage.mobile}
                    effect="blur"
                    className="rounded-lg"
                />
            </div>
            <div className="hidden md:block md:rounded-lg lg:hidden">
                <LazyLoadImage
                    alt={name}
                    src={image.tablet}
                    placeholderSrc={placeholderImage.tablet}
                    effect="blur"
                    className="md:rounded-lg"
                />
            </div>
            <div className="hidden lg:block lg:order-2">
                <LazyLoadImage
                    alt={name}
                    src={image.desktop}
                    placeholderSrc={placeholderImage.desktop}
                    effect="blur"
                    className='lg:rounded-lg'
                />
            </div>
        </>
        // <picture>
        //     <source media='(min-width: 1024px)' srcSet={image[2].url} />
        //     <source media='(min-width: 768px)' srcSet={image[1].url} />
        //     <img src={image[0].url} alt={name} className='rounded-lg' />
        // </picture>
    )
}

export default ImageContainer