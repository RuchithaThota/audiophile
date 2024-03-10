import { Link } from "react-router-dom";
import { Category } from "../../models/Product";
import { getCategoryList } from "../../utils/product";
import { scrollTop } from "../../utils/scrollTop";
import { useModal } from "../../../context/ModalContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoryList(): JSX.Element {
    const categoryList: Category[] = getCategoryList();
    const { setIsNavOpen, isNavOpen } = useModal();
    function handleShopLinkClick() {
        scrollTop();
        if (isNavOpen)
            setIsNavOpen(false)
    }
    //JSX
    return (
        <div className="md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
            {categoryList.map((category) => (
                <div className="pt-14 mb-4 w-full relative" key={category.id}>
                    <div className="w-40 absolute-left-center top-0">
                        <LazyLoadImage
                            src={category.image.url}
                            placeholderSrc={category.placeholderImage.url}
                            alt={category.name}
                        />
                    </div>
                    <div className="uppercase font-bold  
                    bg-customGray pt-[88px] pb-[22px] rounded-md">
                        <p className="p text-center text-[15px] mb-4">
                            {category.name}
                        </p>
                        <Link
                            to={`/category/${category.slug}`}
                            onClick={handleShopLinkClick}
                            className="uppercase font-bold w-fit mx-auto flex 
                            items-center gap-4 
                            text-[13px] text-semi-black lg:hover:text-primary">
                            shop
                            <img
                                src={"/images/shared/desktop/icon-arrow-right.svg"}
                                alt="arrowRightIcon"
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;
