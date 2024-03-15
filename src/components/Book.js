import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Book = () => {
    return (
        <div className='book-container'>
            <Header />
            <div className='app'>
                <Outlet />
            </div>
        </div>
    )
}
