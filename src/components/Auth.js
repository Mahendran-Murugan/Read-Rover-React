import React, { useContext, useState } from 'react'

const AuthContext = React.createContext(null)

export const Auth = ({children}) => {
    const [user, setUser] = useState(null)
    const [redirected, setRedirect] = useState(false)

    const changeStatus= () =>{
        setRedirect(prev => !prev)
    }

    const login = (user) => {
        localStorage.setItem("user" , user)
        setUser(user)
    }
    
    const logout = () => {
        
        localStorage.setItem("user" , "")
        setUser(null)
    }

  return (
    <div className='auth-container'>
        <AuthContext.Provider value={{user, login, logout, redirected, changeStatus}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => {
  return (
    useContext(
        AuthContext
    )
  )
}
