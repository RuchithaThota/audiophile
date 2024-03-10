import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function ProfileIcon(): JSX.Element {
    return (
        <button className='absolute cursor-pointer 
        top-[28px] right-[54px] md:right-[38px]'>
            <PersonOutlineOutlinedIcon
                style={{
                    color: "white",
                    fontSize: "2rem"
                }}
            />
        </button>
    )
}

export default ProfileIcon
