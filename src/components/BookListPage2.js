import React, { useEffect, useState } from 'react'
import { ListItem } from './ListItem'
import axios from 'axios'
import '../style/booklistpage.css'
import { useNavigate } from 'react-router-dom'
import { ListItem2 } from './ListItem2'

export const BookListPage2 = () => {

    const navigate = useNavigate()

    useEffect(() => {
        getBooks()
    }, [])

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const response = await axios.get("http://localhost:3001/books/")
            setBooks(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleAddBookClick = () =>{
        navigate('create-book')
    }

    return (
        <div className='books'>
            <div className='books-header'>
                <h2 className='books-title'>Books</h2>
                <p className='books-length'>{books.length}</p>
            </div>
            <hr/>
            <div className='book-list-2'>
                {books.map((book, index) => (
                    <ListItem2 key={index} book={book} />
                ))}
            </div>
            <button onClick={handleAddBookClick} className='add-book-button'>Add Book</button>
        </div>
    )
}
