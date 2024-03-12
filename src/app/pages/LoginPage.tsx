import { useState } from "react"
import Login from "../components/organisms/Login"
import Otp from "../components/organisms/Otp"
import { ConfirmationResult } from "firebase/auth";



function LoginPage() {
    const [showOtpScreen, setShowOtpScreen] = useState(false);
    const [confirmResult, setConfirmResult] = useState<ConfirmationResult | undefined>(undefined);
    return (
        <div className="bg-customGray w-full h-[100vh] 
        p-4 mt-[5.625rem] fixed">
            <div className="bg-white w-full max-w-[400px] 
            mt-[40px] lg:mt-[80px] mx-auto
            rounded-lg p-6 md:p-10 flex flex-col gap-6">
                {!showOtpScreen && <Login
                    setConfirmResult={setConfirmResult}
                    setShowOtpScreen={setShowOtpScreen} />}
                {showOtpScreen && <Otp
                    setConfirmResult={setConfirmResult}
                    confirmResult={confirmResult} />}
            </div>
        </div>
    )
}

export default LoginPage