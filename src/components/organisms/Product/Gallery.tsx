import { ProductGallery } from "../../../models/Product"
import Picture from "../../molecules/Picture"

interface GalleryProps {
    gallery: ProductGallery
}
function Gallery({ gallery }: GalleryProps) {
    const galleryValues = Object.values(gallery);
    return (
        <div className="md:gallery">
            <div className="md:flex md:justify-between md:items-center md:flex-col">
                {galleryValues.slice(0, 2).map((image, index) => {
                    return <div className="mb-[20px] md:mb-0" key={index}>
                        <Picture image={image} />
                    </div>
                })}
            </div>
            <div className="">
                {galleryValues.slice(2, 3).map((image, index) => {
                    return <div className="" key={index}>
                        <Picture image={image} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Gallery