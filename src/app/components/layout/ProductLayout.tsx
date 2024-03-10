import { Outlet } from "react-router-dom"
import CategoryList from "../organisms/CategoryList"
import About from "../organisms/About"


function ProductLayout() {

    return (
        <div className='bg-secondary mt-[5.625rem] 
        pt-[1rem] px-[1.5rem] pb-[7.5rem]
        flex justify-center'>
            <div className="w-full max-w-[69.375rem]
            flex flex-col gap-[7.5rem]">
                <Outlet />
                <CategoryList />
                <About />
            </div>
        </div>
    )
}

export default ProductLayout