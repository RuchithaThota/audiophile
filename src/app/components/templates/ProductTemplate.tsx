import { ProductGallery, RecommendedProduct } from "../../models/Product";
import { getProductById } from "../../utils/product"
import NewProduct from "../atoms/product/NewProduct";
import ProductDesc from "../atoms/product/ProductDesc";
import ProductName from "../atoms/product/ProductName";
import Gallery from "../organisms/product/Gallery";
import ProductDetails from "../organisms/product/ProductDetails";
import ProductImageContainer from "../organisms/product/ProductImageContainer";
import RecommedProducts from "../organisms/product/RecommedProducts"
import ProductCart from "../molecules/ProductCart";
import GoBackLink from "../atoms/GoBackLink";

interface ProductPageTemplateProps {
    productId: number
}

function ProductPageTemplate({ productId }: ProductPageTemplateProps) {
    const product = getProductById(productId);
    const recommendedProducts: RecommendedProduct[] | undefined = product?.recommended;
    const productGallery: ProductGallery | undefined = product?.gallery;
    return (
        <div className="mt-[96px] md:mt-10">
            <GoBackLink />
            <div className="mt-6 lg:mt-14 flex flex-col gap-[7.5rem] md:gap-[6rem] lg:gap-[10rem]">
                {product && <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-24">
                    <ProductImageContainer image={product?.image} name={product.name} fromProductTemplate={true} />
                    <div>
                        {product.isNew && <NewProduct textPrimary={true} />}
                        <div className="py-6 ">
                            <ProductName name={product.name} />
                        </div>
                        <ProductDesc description={product.description} />
                        <p className="h2 text-black text-lg pt-6 pb-8 md:py-8">
                            $ {product?.price}</p>
                        <ProductCart />
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