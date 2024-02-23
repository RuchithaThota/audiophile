import { Link } from 'react-router-dom'
import { scrollTop } from '../../utils/scrollTop';

interface ProductLinkProps {
    productSlug: string;
    className?: string
}

function ProductLink({ productSlug, className }: ProductLinkProps) {
    return (
        <Link to={`/product/${productSlug}`}
            onClick={scrollTop}
            className={className ? className : "primary-btn"}>
            See Product
        </Link>
    )
}

export default ProductLink;