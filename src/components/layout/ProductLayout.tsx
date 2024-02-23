import { Outlet } from "react-router-dom"
import About from "../organisms/About"
import CategoryList from "../organisms/CategoryList"

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