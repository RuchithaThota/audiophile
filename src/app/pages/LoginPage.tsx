import { useState } from "react"
import Login from "../components/organisms/Login"
import Otp from "../components/organisms/Otp"
import { ConfirmationResult } from "firebase/auth";



function LoginPage() {
    const [showOtpScreen, setShowOtpScreen] = useState(false);
    const [confirmResult, setConfirmResult] = useState<ConfirmationResult | undefined>(undefined);
    return (
        <div className="bg-customGray w-full h-[100vh] 
        p-4 pt-[5.625rem] fixed">
            {!showOtpScreen && <Login
                setConfirmResult={setConfirmResult}
                setShowOtpScreen={setShowOtpScreen} />}
            {showOtpScreen && <Otp
                setConfirmResult={setConfirmResult}
                confirmResult={confirmResult} />}
        </div>
    )
}

export default LoginPage