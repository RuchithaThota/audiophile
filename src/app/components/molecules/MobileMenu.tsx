import CategoryList from "../organisms/CategoryList"

function MobileMenu() {
    return (
        <div className="modal-wrapper lg:hidden
         ">
            <div className="bg-white py-8 px-6 md:pt-14 md:pb-16 md:px-10">
                <CategoryList />
            </div>
        </div>
    )
}

export default MobileMenu
