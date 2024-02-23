import { Link } from "react-router-dom";
import { HomeData } from "../../../models/Product";
import ImageContainer from "../../molecules/ImageContainer";

interface SectionOneProps {
    product: HomeData
}

function Section1({ product }: SectionOneProps) {
    return (
        <div className="sectionOne">
            <div className='w-[172px] 
            mx-auto mb-8 md:w-[197px] 
            lg:w-full lg:overflow-hidden lg:my-auto  
            xl:bottom-[-50px] xl:mt-auto xl:relative xl:h-[460px]'>
                <ImageContainer image={product.image} name={product.name} />
            </div>
            <div className="mx-auto flex flex-col items-center gap-6 
            md:w-[21rem] lg:items-start">
                <h1 className="h1 text-center text-white 
                md:leading-[80px] lg:text-left">
                    {product.name}
                </h1>
                <p className="primary-para leading-6 lg:text-left">
                    {product.description}
                </p>
                <Link to={product.slug}
                    className="sectionOne-btn">
                    See Product
                </Link>
            </div>
        </div>
    );
}
export default Section1;
