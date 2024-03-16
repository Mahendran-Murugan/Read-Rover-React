import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem2 = ({book}) => {
  return (
    <>
    <a href= {book.booklink} target='_blank'>
        <div className='books-list-item'>
            <h3>{book.title}</h3>
        </div>
    </a>
    <p>{book.bookdescription}</p>
    <hr className='books-hr' />
    </>
  )
}
