import React, { useEffect, useState } from 'react'
import { ListItem } from './ListItem'
import axios from 'axios'
import {AddButton} from './AddButton'

export const BookListPage = () => {

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

    

    return (
        <div className='books'>
            <div className='books-header'>
                <h2 className='books-title'>&#9782; Books</h2>
                <p className='books-length'>{books.length}</p>
            </div>
            <div className='book-list'>
                {books.map((book, index) => (
                    <ListItem key={index} book={book} />
                ))}
            </div>
        </div>
    )
}
