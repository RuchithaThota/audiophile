import { HomeData } from "../../../models/Product"
import ProductLink from "../../molecules/ProductLink"

interface SectionTwoProps {
    product: HomeData
}

const Section2: React.FC<SectionTwoProps> = ({ product }) => {
    return (
        <div className="sectionTwo flex flex-col gap-8 ">
            <h2 className="h2">
                {product.name}
            </h2>
            <ProductLink productSlug={product.slug} className="secondary-btn" />
        </div>
    )
}

export default Section2