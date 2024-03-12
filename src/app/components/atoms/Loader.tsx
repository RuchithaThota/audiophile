import { CircularProgress } from '@mui/material'

function Loader() {
    return (
        <div className="
                bg-white w-[40px] h-[40px] rounded-full 
                flex-center
                z-10
                absolute-left-center
                top-[50%]
                shadow-lg
                ">
            <CircularProgress size={20} style={{
                color: "#d87d4a"
            }} />
        </div>
    )
}

export default Loader