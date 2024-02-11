"use client"
import { createContext, useState } from "react"


const appContext = createContext(null)

function Context({ children }) {
    const [sideBar, setSideBar] = useState(false)

    const sideBarOn = () => {
        setSideBar(true)
    }
    return (
        <appContext.Provider
            value={{
                sideBar,
                sideBarOn,
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export { appContext, Context }
