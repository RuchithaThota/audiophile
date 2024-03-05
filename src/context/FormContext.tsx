/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

interface FormContextType {
    formData: {
        name: string;
        email: string;
        phoneNumber: string;
        address: string;
        pincode: string;
        city: string;
        country: string;
        paymentType: string;
        eNumber: string;
        ePin: string;
    },
    setFormData: React.Dispatch<React.SetStateAction<FormContextType["formData"]>>,
    formErrors: {
        [key: string]: string
    },
    setFormErrors: React.Dispatch<React.SetStateAction<FormContextType["formErrors"]>>
}
const initialState = {
    formData: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        pincode: "",
        city: "",
        country: "",
        paymentType: "COD",
        eNumber: "",
        ePin: ""
    },
    setFormData: () => { },
    formErrors: {},
    setFormErrors: () => { }
}
const FormContext = createContext<FormContextType>(initialState);


export const useForm = () => useContext(FormContext);

interface FormContextProviderProps {
    children: React.ReactNode;
}
const FormContextProvider = ({ children }: FormContextProviderProps) => {
    const [formData, setFormData] = useState(initialState.formData);
    const [formErrors, setFormErrors] = useState(initialState.formErrors);
    const contextValue: FormContextType = { formData, setFormData, formErrors, setFormErrors }
    useEffect(() => {
        console.log(formData);
    }, [formData])
    return <FormContext.Provider value={contextValue}>
        {children}
    </FormContext.Provider>
}
export default FormContextProvider;