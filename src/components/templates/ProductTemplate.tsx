import { ProductGallery, RecommendedProduct } from "../../models/Product";
import { getProductById } from "../../utils/product"
import Gallery from "../organisms/Product/Gallery";
import ProductDetails from "../organisms/Product/ProductDetails";
import RecommedProducts from "../organisms/Product/RecommedProducts"

interface ProductPageTemplateProps {
    productId: number
}

function ProductPageTemplate({ productId }: ProductPageTemplateProps) {
    const product = getProductById(productId);
    const recommendedProducts: RecommendedProduct[] | undefined = product?.recommended;
    const productGallery: ProductGallery | undefined = product?.gallery;
    return (
        <>
            <ProductDetails />
            {productGallery && <Gallery gallery={productGallery} />}
            {recommendedProducts?.length &&
                <RecommedProducts recommended={recommendedProducts} />}
        </>
    )
}

export default ProductPageTemplate