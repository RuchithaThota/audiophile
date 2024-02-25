import CategoryList from "../organisms/CategoryList"

function MobileMenu() {
    return (
        <div
            className="bg-white w-full h-[calc(100%_-_5.625rem)] 
            fixed top-[5.625rem] z-10 overflow-auto py-8 px-6 md:h-fit 
            md:pt-14 md:pb-16 md:px-10 md:rounded-e-lg">
            <CategoryList />
        </div>
    )
}

export default MobileMenu