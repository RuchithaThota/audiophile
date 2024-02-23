import { RecommendedProduct } from "../../../models/Product"
import Picture from "../../molecules/Picture"
import ProductLink from "../../molecules/ProductLink"

interface RecommendedProductsProps {
    recommended: RecommendedProduct[]
}

const RecommedProducts: React.FC<RecommendedProductsProps> = ({ recommended }) => {
    return (
        <div>
            <h2 className="h2 text-2xl mb-10 md:text-[32px] md:mb-14 lg:mb-16 text-center">
                You May Also Like</h2>
            <div className="w-full md:grid md:grid-cols-3 md:gap-3 lg:gap-7">
                {recommended.map((product) => {
                    return <div className="w-full mb-14 flex flex-col items-center gap-8">
                        <div className="bg-light-gray rounded-lg">
                            <Picture image={product.image} alt={product.name} />
                        </div>
                        <h2 className="h2 text-center">{product.name}</h2>
                        <ProductLink productSlug={product.slug} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecommedProducts