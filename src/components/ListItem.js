import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({book}) => {
  return (
    <>
    <Link to={`/blog/${book.id}`}>
        <div className='books-list-item-2'>
            <h3>{book.title}</h3>
        </div>
    </Link>
    <hr className='books-hr' />
    </>
  )
}
