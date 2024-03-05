/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import Toast from "../app/components/atoms/Toast";

export type ToastOptions = {
    type: 'success' | 'error' | 'info' | 'warning';
    duration: number;
    title: string;
}

interface ToastContextType {
    showToast: (options: ToastOptions) => void;
    hideToast: () => void;
}

const initialState = {
    showToast: () => { },
    hideToast: () => { }
}

const ToastContext = createContext<ToastContextType>(initialState);

export const useToast = () => useContext(ToastContext);

interface ToastProviderProps {
    children: React.ReactNode;
}

const ToastContextProvider = ({ children }: ToastProviderProps) => {
    const [toastOptions, setToastOptions] = useState<ToastOptions | null>(null)
    const showToast = (options: ToastOptions) => {
        setToastOptions(options);
        const timeoutId = setTimeout(() => {
            hideToast()
        }, options.duration || 3000)
        return () => clearTimeout(timeoutId);
    }
    const hideToast = () => {
        setToastOptions(null)
    }
    const contextValue: ToastContextType = { showToast, hideToast };
    return <ToastContext.Provider value={contextValue}>
        {children}
        {toastOptions &&
            <Toast toastOptions={toastOptions} />}
    </ToastContext.Provider>
}
export default ToastContextProvider;
