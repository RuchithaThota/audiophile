import { useNavigate } from 'react-router-dom';

function GoBackLink() {
    const navigate = useNavigate();
    return (
        <button className="text-para-secondary text-[15px] font-medium  w-fit"
            onClick={() => {
                navigate(-1)
            }}>Go Back</button>
    )
}

export default GoBackLink