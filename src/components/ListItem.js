import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({book}) => {
  return (
    <Link to={`/book/${book.id}`}>
        <div className='books-list-item'>
            <h3>{book.body}</h3>
        </div>
    </Link>
  )
}
