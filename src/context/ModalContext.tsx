/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

interface ModalContextProviderProps {
    children: React.ReactNode
}
type ContextType = {
    isCartModalOpen: boolean,
    setIsCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isNavOpen: boolean,
    setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const initialState = {
    isCartModalOpen: false,
    setIsCartModalOpen: () => { },
    isNavOpen: false,
    setIsNavOpen: () => { }
}
const ModalContext = createContext<ContextType>(initialState);

export const useModal = (): ContextType => useContext(ModalContext);


const ModalContextProvider: React.FC<ModalContextProviderProps> = ({ children }) => {
    const [isCartModalOpen, setIsCartModalOpen] = useState(initialState.isCartModalOpen);
    const [isNavOpen, setIsNavOpen] = useState(initialState.isNavOpen)
    const contextValue: ContextType = { isCartModalOpen, setIsCartModalOpen, isNavOpen, setIsNavOpen }
    return <ModalContext.Provider value={contextValue}>
        {children}
    </ModalContext.Provider>
}
export default ModalContextProvider;