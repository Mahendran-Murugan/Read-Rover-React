import React, { useEffect, useState } from 'react'
import { ListItem } from './ListItem'
import axios from 'axios'
import '../style/booklistpage.css'
import { useNavigate } from 'react-router-dom'

export const BookListPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        getBooks()
    }, [])

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const response = await axios.get("http://localhost:3001/blogs/")
            setBooks(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleAddBookClick = () =>{
        navigate('/blog/new')
    }

    return (
        <div className='books'>
            <div className='books-header'>
                <h2 className='books-title'>Blogs</h2>
                <p className='books-length'>{books.length}</p>
            </div>
            <hr/>
            <div className='book-list'>
                {books.map((book, index) => (
                    <ListItem key={index} book={book} />
                ))}
            </div>
            <button onClick={handleAddBookClick} className='add-book-button'>Add Blog</button>
        </div>
    )
}
