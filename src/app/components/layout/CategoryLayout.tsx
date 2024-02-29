import { Outlet, useLocation } from 'react-router-dom'
import About from '../../../components/organisms/About'
import CategoryTitle from '../../../components/molecules/CategoryTitle'
import CategoryList from '../../../components/organisms/CategoryList';

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