import { Link } from "react-router-dom"
import { HomeData } from "../../../models/Product"

interface SectionTwoProps {
    product: HomeData
}

const Section2: React.FC<SectionTwoProps> = ({ product }) => {
    return (
        <div className="sectionTwo flex flex-col gap-8 ">
            <h2 className="h2">
                {product.name}
            </h2>
            <Link to={product.slug} className="secondary-btn">
                See Product
            </Link>
        </div>
    )
}

export default Section2