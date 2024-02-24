import { ProductImage } from "../../../models/Product"

interface ProductImageContProps {
    image: ProductImage,
    name: string,
    index?: number,
    fromProductTemplate?: boolean
}

function ProductImageContainer({ image, name, index, fromProductTemplate }: ProductImageContProps) {
    return (
        <>
            <img
                src={image.mobile}
                alt={name}
                loading="lazy"
                className="rounded-lg mb-8 md:hidden"
            />
            <img
                src={image.tablet}
                alt={name}
                loading="lazy"
                className={`hidden ${fromProductTemplate ? "w-72" : ''} md:block md:mb-[52px] md:rounded-lg lg:hidden`}
            />
            <img
                src={image.desktop}
                alt={name}
                loading="lazy"
                className={`hidden lg:block lg:rounded-lg lg:w-1/2 
                        ${index ? (index + 1) % 2 === 0 ? 'lg:order-2' : '' : null}`}
            />
        </>
    )
}

export default ProductImageContainer