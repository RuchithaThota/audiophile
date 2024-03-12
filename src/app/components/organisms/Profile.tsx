import { useToast } from '../../../context/ToastContext';
import { Signout, currentUser } from '../../../firebase/AuthService'
import { useModal } from '../../../context/ModalContext';

function Profile() {
    const user = currentUser();
    const { showToast } = useToast();
    const { setShowProfile } = useModal();
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
        <div className='bg-secondary rounded-sm w-[180px] z-20 
        top-[3rem]  absolute-left-center p-4'>
            <p className='font-bold text-[13px]'>
                <span className='text-primary'>
                    Hello!
                </span> {user?.displayName}</p>
            <button
                onClick={handleSignout}
                className='text-[13px] text-para-secondary
            hover:text-black font-medium mt-4'>Signout</button>
        </div>
    )
}

export default Profile