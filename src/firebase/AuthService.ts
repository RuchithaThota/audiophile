import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { firebaseAuth } from ".";
//Recaptcha
export const Recaptcha = () => {
  return new RecaptchaVerifier(firebaseAuth, "recaptcha-container", {});
};
//SignIn With PhoneNumber
export const SignIn = async (phoneNumber: string) => {
  const confirmResult: ConfirmationResult = await signInWithPhoneNumber(
    firebaseAuth,
    phoneNumber,
    Recaptcha()
  );
  return confirmResult;
};
// VerifyOTP
export const VerifyOTP = async (
  confirmResult: ConfirmationResult | undefined,
  code: string
) => {
  const result = await confirmResult?.confirm(code);
  return result;
};
