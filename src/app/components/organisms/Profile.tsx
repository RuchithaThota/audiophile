import { useToast } from '../../../context/ToastContext';
import { Signout, currentUser } from '../../../firebase/AuthService'
import { useModal } from '../../../context/ModalContext';
import { Modal } from '@mui/material';

function Profile() {
    const user = currentUser();
    const { showToast } = useToast();
    const { setShowProfile, showProfile } = useModal();
    const handleSignout = async () => {
        try {
            await Signout();
            setShowProfile(false);
            showToast({ type: 'success', title: "signout successfull!", duration: 1000 })
        } catch (error) {
            showToast({ type: 'error', title: "signout failed!", duration: 1000 })
        }
    }
    return (
        <Modal
            sx={{ zIndex: 5 }}
            open={showProfile}
            onClose={() => setShowProfile(false)}>
            <div className='bg-secondary 
            rounded-sm w-[180px] z-20 
        top-[5rem] absolute right-[4rem] p-4'>
                <p className='font-bold text-[13px]'>
                    <span className='text-primary'>
                        Hello!
                    </span> {user?.displayName}</p>
                <button
                    onClick={handleSignout}
                    className='text-[13px] text-para-secondary
            hover:text-black font-medium mt-4'>Signout</button>
            </div>
        </Modal>
    )
}

export default Profile