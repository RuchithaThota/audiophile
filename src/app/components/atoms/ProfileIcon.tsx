import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { currentUser } from '../../../firebase/AuthService';
import Profile from '../organisms/Profile';
import { useModal } from '../../../context/ModalContext';

function ProfileIcon(): JSX.Element | null {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const user = currentUser();
    const { setShowProfile, showProfile } = useModal();
    if (pathname === "/login") return null;
    const handleProfileIconClick = () => {
        if (!user) {
            navigate("/login")
        } else {
            if (user.displayName) setShowProfile(prev => !prev);
        }
    }
    return (
        <div
            className='absolute cursor-pointer 
        top-[28px] right-[60px] md:right-[50px]'>
            <PersonOutlineOutlinedIcon
                style={{
                    color: "white",
                    fontSize: "2rem"
                }}
                onClick={handleProfileIconClick}
            />
            {showProfile && <Profile />}
        </div>
    )
}

export default ProfileIcon
