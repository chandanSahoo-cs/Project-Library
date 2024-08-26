import React from 'react'
import UserContext from './userContext'
import {useState} from 'react'

function ContextProvider({children}){
    const [value, setValue]=useState(0)
    return(
        <UserContext.Provider value={{value,setValue}}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextProvider