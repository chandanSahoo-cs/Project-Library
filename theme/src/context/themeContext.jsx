import React, { useContext } from "react";
import { createContext } from "react";
export const themeContext= createContext({
    themeMode : "light",
    lightmode : () =>{
    },
    darkmode : ()=>{
    }
})
export const ThemeProvider = themeContext.Provider
export default function useTheme(){
    return useContext(themeContext)
}
