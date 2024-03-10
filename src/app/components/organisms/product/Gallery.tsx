import { ProductGallery } from "../../../models/Product"
import ImageContainer from "../../molecules/ImageContainer";

interface GalleryProps {
    gallery: ProductGallery
}
function Gallery({ gallery }: GalleryProps) {
    const galleryValues = Object.values(gallery);
    return (
        <div className="md:gallery">
            <div className="md:flex md:justify-between md:items-center md:flex-col">
                {galleryValues.slice(0, 2).map((galleryItem, index) => {
                    return <div className="mb-[20px] md:mb-0" key={index}>
                        <ImageContainer image={galleryItem.image}
                            name={"gallery-image-" + [index + 1]}
                            placeholderImage={galleryItem.placeholderImage} />
                    </div>
                })}
            </div>
            <div>
                {galleryValues.slice(2, 3).map((galleryItem, index) => {
                    return <div className="" key={index}>
                        <ImageContainer image={galleryItem.image}
                            name={"gallery-image-" + [index + 1]}
                            placeholderImage={galleryItem.placeholderImage} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Gallery