import { LazyLoadImage } from "react-lazy-load-image-component"
import { ProductImage } from "../../../models/Product"

interface ProductImageContProps {
    image: ProductImage,
    placeholderImage: ProductImage,
    name: string,
    index?: number,
    fromProductTemplate?: boolean
}

function ProductImageContainer({ image, placeholderImage, name, index,
    fromProductTemplate = false }: ProductImageContProps) {
    return (
        <>
            <div className="md:hidden">
                <LazyLoadImage src={image.mobile}
                    placeholderSrc={placeholderImage.mobile}
                    alt={name}
                    className="rounded-lg"
                />
            </div>
            <div className="hidden md:block lg:hidden">
                <LazyLoadImage src={image.tablet}
                    placeholderSrc={placeholderImage.tablet}
                    alt={name}
                    width={fromProductTemplate ? "281px" : ''}
                    className="rounded-lg"
                />
            </div>
            <div className={`hidden lg:flex lg:flex-1  
            ${index ? (index + 1) % 2 === 0 ? 'lg:order-2' : '' : null}`}>
                <LazyLoadImage src={image.desktop}
                    placeholderSrc={placeholderImage.desktop}
                    alt={name}
                    className="rounded-lg"
                />
            </div >
        </>
    )
}

export default ProductImageContainer