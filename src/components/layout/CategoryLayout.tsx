import { Outlet, useLocation } from 'react-router-dom'
import About from '../organisms/About'
import CategoryTitle from '../molecules/CategoryTitle'
import CategoryList from '../organisms/CategoryList';

function CategoryLayout(): JSX.Element {
    const location = useLocation();
    const currentCategory = location.pathname.split("/")[2];
    return (
        <div className='bg-secondary'>
            <CategoryTitle title={currentCategory} />
            <div className="page-container">
                <Outlet />
                <CategoryList />
                <About />
            </div>
        </div>
    )
}

export default CategoryLayout