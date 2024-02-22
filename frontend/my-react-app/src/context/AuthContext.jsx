import React, { createContext, useState } from 'react'
export let authContext = createContext()
export const AuthContext = ({children}) => {

    let [AuthLogin, setAuthLogin] = useState(false)
    let [AuthName, setAuthName] = useState("")
    
    let AuthLoginFunc = ()=>setAuthLogin(true)
    let AuthNameFunc = (val) => setAuthName(val)
    let AuthLogoutFunc = ()=>{
        setAuthLogin(false)
        setAuthName("")
    }

    let obj = {
        AuthLogin,
        AuthName,
        AuthLoginFunc,
        AuthLogoutFunc,
        AuthNameFunc
    }
    
  return (
    <authContext.Provider value={obj}>
        {children}
    </authContext.Provider>
  )
}