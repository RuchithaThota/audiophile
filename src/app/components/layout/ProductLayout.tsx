import { Outlet } from "react-router-dom"
import About from "../../../components/organisms/About"
import CategoryList from "../../../components/organisms/CategoryList"

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