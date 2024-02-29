import { CategoryProduct } from "../../models/Product";
import { getCategoryProductsByName } from "../../utils/product"
import NewProduct from "../atoms/product/NewProduct";
import ProductDesc from "../atoms/product/ProductDesc";
import ProductName from "../atoms/product/ProductName";
import ProductLink from "../molecules/ProductLink";
import ProductImageContainer from "../organisms/product/ProductImageContainer";

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
                    <ProductImageContainer image={catProduct.image} name={catProduct.name} index={index} />
                    <div className={`productCard  
                    ${(index + 1) % 2 === 0 ? 'lg:pr-32' : 'lg:pl-32'}`}>
                        {catProduct.isNew &&
                            <NewProduct textPrimary={true} />
                        }
                        <ProductName name={catProduct.name} />
                        <ProductDesc description={catProduct.description} />
                        <ProductLink productSlug={catProduct.slug} />
                    </div>
                </div>
            })}
        </div >
    )
}

export default CategoryPageTemplate