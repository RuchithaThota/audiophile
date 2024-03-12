import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link, useLocation } from 'react-router-dom';

function ProfileIcon(): JSX.Element | null {
    const { pathname } = useLocation();
    if (pathname === "/login") return null;
    return (
        <Link
            to="/login"
            className='absolute cursor-pointer 
        top-[28px] right-[60px] md:right-[50px]'>
            <PersonOutlineOutlinedIcon
                style={{
                    color: "white",
                    fontSize: "2rem"
                }}
            />
        </Link>
    )
}

export default ProfileIcon
