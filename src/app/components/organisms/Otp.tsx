import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useToast } from "../../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import { ConfirmationResult, updateProfile } from "firebase/auth";
import { SignIn, VerifyOTP } from "../../../firebase/AuthService";
import { useAppSelector } from "../../../store/hooks";
import { firebaseAuth } from "../../../firebase";

interface OtpProps {
    confirmResult: ConfirmationResult | undefined,
    setConfirmResult: React.Dispatch<React.SetStateAction<ConfirmationResult | undefined>>;
}

function Otp({ confirmResult, setConfirmResult }: OtpProps) {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [time, setTime] = useState(30);
    const [resend, setResend] = useState(false);
    const user = useAppSelector(state => state.auth.user)
    useEffect(() => {
        if (inputRefs.current[0])
            inputRefs.current[0].focus();
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            if (time > 0) {
                setTime((prev) => (prev - 1))
            } else {
                setResend(true);
            }
        }, 1000)
        return () => clearInterval(timer);
    }, [time])
    useEffect(() => {
        if (otp.join("").length === 6) {
            verifyCode(confirmResult);
        }
    }, [otp])
    const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = value.replace(/\D/g, '')
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp)
        if (value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus()
        }
    }
    const handleClick = (index: number) => {
        inputRefs.current[index].setSelectionRange(1, 1)
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus()
        }
    }
    const handleContinue = () => {
        verifyCode(confirmResult);
    }
    //verifyCode
    const verifyCode = async (confirm: ConfirmationResult | undefined) => {
        const combinedOtp = otp.join("");
        if (combinedOtp.length !== 6) inputRefs.current[0].focus()
        if (combinedOtp.length === 6)
            try {
                const result = await VerifyOTP(confirm, combinedOtp);
                updateDisplayName();
                console.log(result);
            } catch (error) {
                showToast({
                    type: 'error', title: "Something went wrong try again!!",
                    duration: 1000
                })
                console.error(error);
            } finally {
                setOtp(new Array(6).fill(""));
            }
    }
    const updateDisplayName = () => {
        if (firebaseAuth.currentUser)
            updateProfile(firebaseAuth.currentUser, {
                displayName: user.name
            }).then(() => {
                showToast({ type: 'success', title: "Login Successful", duration: 1000 });
                navigate("/");
            }).catch((error) => {
                console.error(error);
            })
    }
    const handleResend = async () => {
        setTime(30);
        setResend(false);
        try {
            const phoneNumber = "+91" + user.mobileNumber;
            console.log(user.mobileNumber);
            const result = await SignIn(phoneNumber);
            if (result)
                console.log(result);
            setConfirmResult(result);
            verifyCode(result);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            if (error.code === 'auth/invalid-phone-number') {
                showToast({ type: 'error', title: "Invalid Phone Number", duration: 1000 })
            } else {
                showToast({
                    type: 'error',
                    title: 'Something went wrong Try Again.', duration: 1000
                });
            }
        }
    }
    return (
        <>
            <div id="recaptcha-container"></div>
            <div>
                <h1 className="font-bold text-lg">
                    Verify with OTP</h1>
                <p className="text-[12px] text-para-secondary font-medium">
                    Sent to 6281082538
                </p>
            </div>
            <div className="flex gap-4">
                {otp.map((value, index) => {
                    return <input type="text"
                        key={index}
                        ref={(input) => (
                            inputRefs.current[index] = input as HTMLInputElement)}
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-10 h-10 rounded-sm
                outline-none text-center font-bold text-black
                border border-qtyBtn"
                    />
                })}
            </div>
            <div>
                {!resend && <p className="text-para-secondary text-[12px]">
                    Resend OTP in
                    <span className="text-black font-bold">
                        {time < 10 ? ` 00:0${time}` : ` 00:${time}`}
                    </span>
                </p>}
                {resend && <button
                    className="text-primary text-[13px] font-bold otline-none"
                    onClick={handleResend}>
                    Resend
                </button>}
            </div >
            <button className={`w-full justify-center 
            ${otp.join("").length === 6 ? "primary-btn" : "disable-primary-btn"}`}
                onClick={handleContinue}
            >Continue</button>
        </>
    )
}

export default Otp


