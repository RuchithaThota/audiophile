import { useNavigate } from "react-router-dom";
import { ProductGallery, RecommendedProduct } from "../../models/Product";
import { getProductById } from "../../utils/product"
import NewProduct from "../atoms/Product/NewProduct";
import ProductDesc from "../atoms/Product/ProductDesc";
import ProductName from "../atoms/Product/ProductName";
import Gallery from "../organisms/Product/Gallery";
import ProductDetails from "../organisms/Product/ProductDetails";
import ProductImageContainer from "../organisms/Product/ProductImageContainer";
import RecommedProducts from "../organisms/Product/RecommedProducts"

interface ProductPageTemplateProps {
    productId: number
}

function ProductPageTemplate({ productId }: ProductPageTemplateProps) {
    const product = getProductById(productId);
    const recommendedProducts: RecommendedProduct[] | undefined = product?.recommended;
    const productGallery: ProductGallery | undefined = product?.gallery;
    const navigate = useNavigate();
    return (
        <div className="mt-[96px] md:mt-10">
            <button className="text-para-secondary text-[15px] font-medium  w-fit"
                onClick={() => {
                    navigate(-1)
                }}>Go Back</button>
            <div className="mt-6 lg:mt-14 flex flex-col gap-[7.5rem] md:gap-[6rem] lg:gap-[10rem]">
                {product && <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-24">
                    <ProductImageContainer image={product?.image} name={product.name} fromProductTemplate={true} />
                    <div>
                        {product.isNew && <NewProduct textPrimary={true} />}
                        <div className="py-6 ">
                            <ProductName name={product.name} />
                        </div>
                        <ProductDesc description={product.description} />
                    </div>
                </div>}
                {product && <ProductDetails features={product?.features} boxItems={product?.boxItems} />}
                {productGallery && <Gallery gallery={productGallery} />}
                {recommendedProducts?.length &&
                    <RecommedProducts recommended={recommendedProducts} />}
            </div>
        </div>
    )
}

export default ProductPageTemplate