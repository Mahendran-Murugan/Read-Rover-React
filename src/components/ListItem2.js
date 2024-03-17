import React from 'react'
import img from '../assets/about.png'
import '../style/listitem2.css'

export const ListItem2 = ({ book }) => {
  return (
    <div className='list-item-container'>
      <img src={book.bookimg} className='image-book' />
      <a href={book.booklink} target='_blank'>
        <div className='books-list-item'>
          <h3>{book.title}</h3>
        </div>
      </a>
      <p>{book.bookdescription}</p>
    </div>
  )
}
