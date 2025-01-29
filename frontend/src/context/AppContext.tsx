/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React, { createContext, ReactNode, useEffect, useState } from "react";



interface AppContextType {
    token: string | false
    setToken: React.Dispatch<React.SetStateAction<string | false>>
    formatMoney: (amount: number) => string
}

export const AppContext = createContext<AppContextType | any>({});

interface AppContextProviderProps {
    children: ReactNode
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {

    const [token, setToken] = useState<string | false>()

    function formatMoney(amount: number): string {
        return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const value = {
        token, setToken,
        formatMoney,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider