import { CategoryProduct } from "../../models/Product";
import { getCategoryProductsByName } from "../../utils/product"
import ProductLink from "../molecules/ProductLink";

interface CategoryPageTemplateProps {
    categoryName: string
}

function CategoryPageTemplate({ categoryName }: CategoryPageTemplateProps): JSX.Element {
    const catProducts: CategoryProduct[] =
        getCategoryProductsByName(categoryName.toLowerCase());
    return (
        <div className="flex flex-col gap-28 md:gap-[10rem]">
            {catProducts.map((catProduct, index) => {
                return <div className="lg:flex lg:items-center" key={index}>
                    <img
                        src={catProduct.image.mobile}
                        alt={catProduct.name}
                        loading="lazy"
                        className="rounded-lg mb-8 md:hidden"
                    />
                    <img
                        src={catProduct.image.tablet}
                        alt={catProduct.name}
                        loading="lazy"
                        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
                    />
                    <img
                        src={catProduct.image.mobile}
                        alt={catProduct.name}
                        loading="lazy"
                        className={`hidden lg:block lg:rounded-lg lg:w-1/2 
                        ${(index + 1) % 2 === 0 ? 'lg:order-2' : ''}`}
                    />
                    <div className={`w-full flex flex-col items-center gap-6 
                    text-center md:w-[572px] md:mx-auto md:my-0 
                    lg:items-start lg:text-left lg:w-1/2  
                    ${(index + 1) % 2 === 0 ? 'lg:pr-32' : 'lg:pl-32'}`}>
                        {catProduct.isNew &&
                            <p className="new text-primary">
                                New Product
                            </p>}
                        <h2 className="font-bold text-[28px] md:text-[40px] 
                        text-black uppercase md:w-[360px]">
                            {catProduct.name}
                        </h2>
                        <p className="font-medium text-[15px]/7 text-medium-gray">
                            {catProduct.description}
                        </p>
                        <ProductLink productSlug={catProduct.slug} />
                    </div>
                </div>
            })}
        </div >
    )
}

export default CategoryPageTemplate