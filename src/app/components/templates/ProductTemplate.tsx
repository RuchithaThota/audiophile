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
import { formatToUSD } from "../../utils/formatterUSD";
import { useMemo } from "react";

interface ProductPageTemplateProps {
    productId: number
}

function ProductPageTemplate({ productId }: ProductPageTemplateProps) {
    const product = useMemo(() => getProductById(productId), [productId]);
    if (!product) return null;
    const [productPriceUSD] = formatToUSD([product.price]);
    const recommendedProducts: RecommendedProduct[] = product.recommended;
    const productGallery: ProductGallery = product.gallery;
    return (
        <div className="mt-[96px] md:mt-10">
            <GoBackLink />
            <div className="mt-6 lg:mt-14 flex flex-col gap-[7.5rem] md:gap-[6rem] lg:gap-[10rem]">
                <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-24">
                    <ProductImageContainer image={product.image} name={product.name} fromProductTemplate={true} />
                    <div>
                        {product.isNew && <NewProduct textPrimary={true} />}
                        <div className="py-6 ">
                            <ProductName name={product.name} />
                        </div>
                        <ProductDesc description={product.description} />
                        <p className="h2 text-black text-lg pt-6 pb-8 md:py-8">
                            {productPriceUSD}</p>
                        <ProductCart product={product} />
                    </div>
                </div>
                <ProductDetails features={product.features}
                    boxItems={product.boxItems} />
                {productGallery && <Gallery gallery={productGallery} />}
                {recommendedProducts.length > 0 &&
                    <RecommedProducts recommended={recommendedProducts} />}
            </div>
        </div>
    )
}

export default ProductPageTemplate