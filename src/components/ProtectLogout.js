import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom';

export const ProtectLogout = ({children}) => {
    const auth = useAuth();
    if(!auth.user){
        return <Navigate to = '/'/>
    }
  return (
    <div>{children}</div>
  )
}