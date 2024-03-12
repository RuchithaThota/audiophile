import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { currentUser } from '../../../firebase/AuthService';
import { useToast } from '../../../context/ToastContext';

function ProfileIcon(): JSX.Element | null {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const user = currentUser();
    const { showToast } = useToast();
    if (pathname === "/login") return null;
    const handleProfileIconClick = () => {
        if (!user) {
            navigate("/login")
        } else {
            if (user.displayName)
                showToast({ type: 'success', title: user.displayName, duration: 1000 })
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
        </div>
    )
}

export default ProfileIcon
