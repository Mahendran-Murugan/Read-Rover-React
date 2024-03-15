import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import axios from 'axios'

export const BookPage = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [book, setBook] = useState(null)

    useEffect(() => {
        getBook()

    }, [id])

    const getBook = async () => {
        console.log(id)
        try {
            const response = await fetch(`http://localhost:3001/books/${id}`)
            const data = await response.json()
            setBook(data)
        }
        catch (e) {
            console.log(e)
        }
    }


    const createBook = async () => {
        await axios.post(`http://localhost:3001/books/`)
    }

    const updateBook = async () => {
        await fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...book, 'updated': new Date() })
        })
    }

    const handleSubmit = () => {
        if (id !== 'new' && !book.body) {
            deleteBook()
        } else if( id === 'new') {
            updateBook()
        } else if(id == 'new' && book !== null){
            createBook()
        }
        navigate('/book')
    }

    const deleteBook = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/books/${id}`)
        } catch (e) {
            console.log(e)
        }
        navigate(-1)
    }

    return (
        <div className='book'>
            <div className='note-header'>
                <h3>
                    <Link to='/book'>
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                <button onClick={deleteBook}>Delete</button>
            </div>
            <textarea value={book?.body} onChange={(e) => { setBook({ ...book, 'body': e.target.value }) }} />
        </div>
    )
}
