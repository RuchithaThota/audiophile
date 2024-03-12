import {
  ConfirmationResult,
  RecaptchaVerifier,
  User,
  browserLocalPersistence,
  setPersistence,
  signInWithPhoneNumber,
} from "firebase/auth";
import { firebaseAuth } from ".";
//required if you want to keep logged in after user exits the browser or closes tab
setPersistence(firebaseAuth, browserLocalPersistence);
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
//currentUser
export const currentUser = (): User | null => {
  return firebaseAuth.currentUser;
};
// VerifyOTP
export const VerifyOTP = async (
  confirmResult: ConfirmationResult | undefined,
  code: string
) => {
  const result = await confirmResult?.confirm(code);
  return result;
};
//Signout
export const Signout = async () => {
  await firebaseAuth.signOut();
};
