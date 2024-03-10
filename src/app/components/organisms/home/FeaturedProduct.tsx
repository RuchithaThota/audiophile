import { Link } from "react-router-dom";
import { HomeData } from "../../../models/Product";
import { LazyLoadImage } from "react-lazy-load-image-component";


interface FeaturedProductProps {
    product: HomeData
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
    return (
        <div className="bg-charcoal w-full relative">
            <div className="w-full h-full block align-middle md:hidden">
                <LazyLoadImage
                    src={product.image.mobile}
                    placeholderSrc={product.placeholderImage.mobile}
                    alt="heroImage" />
            </div>
            <div className="hidden md:block lg:hidden md:w-full md:h-full md:align-middle">
                <LazyLoadImage
                    src={product.image.tablet}
                    placeholderSrc={product.placeholderImage.tablet}
                    alt="heroImage" />
            </div>
            <div className="hidden lg:block lg:w-full lg:h-full lg:align-middle">
                <LazyLoadImage
                    src={product.image.desktop}
                    placeholderSrc={product.placeholderImage.desktop}
                    alt="heroImage" />
            </div>
            <div className="max-w-[1109px] w-full
                h-[calc(100%_-_5.625rem)]
                absolute-left-center flex-center
                top-[5.625rem] lg:top-[6rem] lg:h-[calc(100%_-_6rem)]
                px-12 lg:justify-start xl:px-0">
                <div className="flex flex-col items-center text-center   
                lg:items-start lg:text-left">
                    {product.isNew &&
                        <p className="new text-para-primary">
                            New Product
                        </p>}
                    <h1 className="h1 text-secondary mt-4 mb-6   
                    md:my-6 md:tracking-0 md:block md:w-[400px] md:leading-snug">
                        {product.name}
                    </h1>
                    <p className="primary-para leading-[1.5625rem] md:w-[350px] lg:text-left">
                        {product.description}
                    </p>
                    <Link to={`/product/${product.slug}`} className="primary-btn mt-7 md:mt-10">
                        See Product
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProduct;
