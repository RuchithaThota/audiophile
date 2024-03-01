import { useModal } from "../../../context/ModalContext";
import CategoryList from "../organisms/CategoryList"
import { Box, Modal } from "@mui/material";

function MobileMenu() {
    const { isNavOpen, setIsNavOpen } = useModal();
    return (
        <Modal open={isNavOpen}
            onClose={() => setIsNavOpen(false)}
            sx={{ zIndex: 5, overflow: 'scroll' }}  >
            <Box className="fixed top-[5.625rem] bg-white w-full h-full 
            md:h-auto rounded-b-lg z-10 overflow-auto">
                <div className="pt-8 pb-24 px-6 md:pt-14 md:pb-16 md:px-10 ">
                    <CategoryList />
                </div>
            </Box>
        </Modal>
    )
}

export default MobileMenu
