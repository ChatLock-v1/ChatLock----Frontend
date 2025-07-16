import { createContext, useRef, useState } from "react";

export const webSocketContext = createContext(null)


export const ContextProvider = (({children}) => {

    // const socketRef = useRef(null) // store socket instance

    const serverUrl = "https://chat-lock-backend-m3wwhfymg-mohdirfan70097-gmailcoms-projects.vercel.app"

    const value = {
       
        serverUrl
    }


    return(

    <webSocketContext.Provider value={value}>
        {children}
    </webSocketContext.Provider>
    )
})