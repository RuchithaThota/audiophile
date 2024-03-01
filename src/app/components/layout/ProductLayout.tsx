import { Outlet } from "react-router-dom"
import CategoryList from "../organisms/CategoryList"
import About from "../organisms/About"


function ProductLayout() {
    return (
        <div className='bg-secondary'>
            <div className="page-container">
                <Outlet />
                <CategoryList />
                <About />
            </div>
        </div>
    )
}

export default ProductLayout