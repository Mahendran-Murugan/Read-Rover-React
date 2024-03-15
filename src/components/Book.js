import React from 'react'
import { Outlet } from 'react-router-dom'
import '../style/book.css'

export const Book = () => {
    return (
        <div className='book-main-container'>
            <div className='app'>
                <Outlet />
            </div>
        </div>
    )
}
