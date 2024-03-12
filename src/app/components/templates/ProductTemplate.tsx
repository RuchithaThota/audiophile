import { ProductGallery, RecommendedProduct } from "../../models/Product";
import { getProductById } from "../../utils/product"
import NewProduct from "../atoms/product/NewProduct";
import ProductDesc from "../atoms/product/ProductDesc";
import Gallery from "../organisms/product/Gallery";
import ProductDetails from "../organisms/product/ProductDetails";
import RecommedProducts from "../organisms/product/RecommedProducts"
import ProductCart from "../molecules/ProductCart";
import GoBackLink from "../atoms/GoBackLink";
import { formatToUSD } from "../../utils/formatterUSD";
import { useMemo } from "react";
import CategoryList from "../organisms/CategoryList";
import About from "../organisms/About";
import ProductImageContainer from "../organisms/product/ProductImageContainer";

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
        <div className='bg-secondary mt-[5.625rem] 
        pt-[1rem] px-[1.5rem] pb-[7.5rem] md:pt-[2rem] md:px-[2.5rem]
        lg:pt-[4.9375rem] lg:pb-[10rem]
        flex justify-center'>
            <div className="w-full max-w-[69.375rem]
            flex flex-col gap-[7.5rem]">
                <div>
                    <GoBackLink />
                    <div className="mt-6 w-full lg:mt-14 flex flex-col items-center
                    gap-10 md:flex-row md:gap-24 lg:gap-[7.75rem]">
                        <ProductImageContainer image={product.image}
                            placeholderImage={product.placeholderImage}
                            name={product.name}
                            fromProductTemplate={true}
                        />
                        <div className="lg:flex-1">
                            {product.isNew && <NewProduct textPrimary={true} />}
                            <h1 className="py-6 md:pt-4 md:pb-8 uppercase font-bold 
                            text-[28px] lg:text-[40px]">
                                {product.name}</h1>
                            <ProductDesc description={product.description} />
                            <p className="pt-6 pb-8 uppercase font-bold text-[18px]">{productPriceUSD}
                            </p>
                            <ProductCart product={product} />
                        </div>
                    </div>
                </div>
                <ProductDetails features={product.features}
                    boxItems={product.boxItems} />
                {productGallery && <Gallery gallery={productGallery} />}
                {recommendedProducts.length > 0 &&
                    <RecommedProducts recommended={recommendedProducts} />}
                <CategoryList />
                <About />
            </div>
        </div>
    )
}

export default ProductPageTemplate