import { useState } from "react";
import { ConfirmationResult } from "firebase/auth";
import { Recaptcha, SignIn } from "../../../firebase/AuthService";
import { useToast } from "../../../context/ToastContext";
import { CurrentUser, updateUser } from "../../../store/authSlice";
import { useAppDispatch } from "../../../store/hooks";

type ErrorType = { [key: string]: boolean };

function Login({ setShowOtpScreen, setConfirmResult }: {
    setShowOtpScreen:
    React.Dispatch<React.SetStateAction<boolean>>;
    setConfirmResult: React.Dispatch<React.SetStateAction<ConfirmationResult | undefined>>;
}) {
    const dispatch = useAppDispatch();
    const { showToast } = useToast();
    const [error, setError] = useState<ErrorType>({});
    const [user, setUser] = useState<CurrentUser>({
        name: "",
        mobileNumber: ""
    })
    //handleChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "mobileNumber") {
            value = value.replace(/\D/g, '');
        }
        if (name === 'name') {
            value = value.replace(/ +/g, ' ');
        }
        setUser(prev => ({ ...prev, [name]: value }))
    }
    //validation
    const validation = () => {
        const errors: ErrorType = {};
        if (user.mobileNumber.length !== 10) {
            errors.mobile = true;
        }
        if (!user.name) {
            errors.name = true;
        }
        setError(errors);
        return Object.keys(errors).length === 0
    }
    // handleContinueBtn
    function handleContinueBtn() {
        const isValid = validation();
        if (isValid) { sendOtp() }
    }
    //sendOtp
    const sendOtp = async () => {
        try {
            const phoneNumber = "+91" + user.mobileNumber;
            Recaptcha();
            const confirmResult = await SignIn(phoneNumber);
            setConfirmResult(confirmResult);
            setShowOtpScreen(true)
            dispatch(updateUser(user));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            if (error.code === 'auth/too-many-requests') {
                showToast({ type: 'error', title: "Too many requests", duration: 1000 })
            }
            if (error.code === 'auth/invalid-phone-number') {
                showToast({ type: 'error', title: "Invalid Phone Number", duration: 1000 })
            } else {
                showToast({
                    type: 'error',
                    title: 'Something went wrong.', duration: 1000
                });
            }
        } finally {
            setError({});
            setUser({ name: "", mobileNumber: "" })
        }
    };
    //JSX
    return (
        <>
            <div id="recaptcha-container"></div>
            <h1 className="font-bold text-lg">
                Login <span className="font-medium text-sm"> or </span> Signup</h1>
            <div>
                <input type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="login-input"
                />
                {error?.name && <p className="text-red-500 text-[10px] mt-2">
                    please enter your name</p>}
            </div>
            <div>
                <input type="text"
                    placeholder="Mobile Number"
                    name="mobileNumber" value={user.mobileNumber}
                    onChange={handleChange}
                    className="login-input"
                />
                {error?.mobile && <p className="text-red-500 text-[10px] mt-2">
                    please enter a valid mobile number (10 digits)</p>}
            </div>
            <p className="text-[12px] text-para-secondary font-bold">
                By continuing, I agree to the <span className="text-primary">
                    Terms of Use </span> & <span className="text-primary">
                    Privacy policy</span></p>
            <button
                id="sign-in-button"
                className={`${user.mobileNumber.length === 10 ?
                    "primary-btn" : "disable-primary-btn"}  w-full justify-center`}
                onClick={handleContinueBtn}>Continue</button>
        </>
    )
}

export default Login