import { BoxItem } from "../../../models/Product";

interface ProductDetailsProps {
    features: string;
    boxItems: BoxItem[]
}

function ProductDetails({ features, boxItems }: ProductDetailsProps) {
    return (
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-28">
            <div className="lg:w-[631.25px]">
                <h2 className="h2 text-[24px] mb-6  md:text-[32px] md:mb-8">Features</h2>
                <p className="secondary-para">{features}</p>
            </div>
            <div className="md:flex md:gap-40 lg:flex-col lg:gap-0">
                <h2 className="h2 text-[24px] mb-6 md:text-[32px] md:mb-8">In the box</h2>
                <ul className="flex flex-col gap-2">
                    {boxItems.map((boxItem, index) => {
                        return <li className="flex gap-6" key={index}>
                            <p className="secondary-para text-primary font-bold">
                                {boxItem.quantity}x</p>
                            <p className="secondary-para">{boxItem.item}</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProductDetails