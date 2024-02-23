import { HomeData } from "../../../models/Product"
import ImageContainer from "../../molecules/ImageContainer"
import ProductLink from "../../molecules/ProductLink"

interface SectionThreeProps {
    product: HomeData
}

function Section3({ product }: SectionThreeProps) {
    return (
        <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="rounded-lg mb-6 md:mb-0">
                <ImageContainer image={product.image} name={product.name} />
            </div>
            <div className="bg-light-gray rounded-lg py-10 px-6 
            md:flex md:flex-col md:justify-center md:p-8 lg:py-10 lg:px-24">
                <h2 className="h2 mb-8">
                    {product.name}
                </h2>
                <ProductLink productSlug={product.slug} className="secondary-btn" />
            </div>
        </div>
    )
}

export default Section3