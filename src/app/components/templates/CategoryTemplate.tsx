import { Product } from "../../models/Product";
import { getCategoryProductsByName } from "../../utils/product"
import NewProduct from "../atoms/product/NewProduct";
import ProductDesc from "../atoms/product/ProductDesc";
import ProductName from "../atoms/product/ProductName";
import CategoryTitle from "../molecules/CategoryTitle";
import ProductLink from "../molecules/ProductLink";
import About from "../organisms/About";
import CategoryList from "../organisms/CategoryList";
import ProductImageContainer from "../organisms/product/ProductImageContainer";

interface CategoryPageTemplateProps {
    categoryName: string
}

function CategoryPageTemplate({ categoryName }: CategoryPageTemplateProps): JSX.Element {
    const catProducts: Product[] =
        getCategoryProductsByName(categoryName.toLowerCase());
    return (
        <div className='bg-secondary'>
            <CategoryTitle title={categoryName} />
            <div className="page-container">
                <div className="flex flex-col gap-28 md:gap-[10rem]">
                    {catProducts.map((catProduct, index) => {
                        return <div className="lg:flex lg:items-center" key={index}>
                            <ProductImageContainer
                                placeholderImage={catProduct.categoryImage.placeholderImage}
                                image={catProduct.categoryImage.image} name={catProduct.name}
                                index={index} />
                            <div className={`productCard  
                    ${(index + 1) % 2 === 0 ? 'lg:pr-32' : 'lg:pl-32'}`}>
                                <div className="mt-6  lg:mt-unset">
                                    {catProduct.isNew &&
                                        <NewProduct textPrimary={true} />
                                    }
                                </div>
                                <ProductName name={catProduct.name} />
                                <ProductDesc description={catProduct.description} />
                                <ProductLink productSlug={catProduct.slug} />
                            </div>
                        </div>
                    })}
                </div >
                <CategoryList />
                <About />
            </div>
        </div>
    )
}

export default CategoryPageTemplate