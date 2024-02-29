import { ProductImage } from "../../models/Product"

interface PictureProps {
    image: ProductImage,
    alt?: string
}
function Picture({ image, alt }: PictureProps) {
    return (
        <picture>
            <source media='(min-width: 1024px)'
                srcSet={image.desktop} />
            <source media='(min-width: 768px)'
                srcSet={image.tablet} />
            <img src={image.mobile}
                alt={alt ? alt : "gallery"} className='rounded-lg' />
        </picture>
    )

}

export default Picture