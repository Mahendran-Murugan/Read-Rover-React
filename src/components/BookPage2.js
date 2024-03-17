import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../style/bookpage2.css'

export const BookPage2 = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")

    const createBook = async () => {
        await axios.post(`http://localhost:3001/books/`,{
            'title':title,
            'booklink':link,
            'bookimg': image,
            'bookdescription':description,
        })
    }

    const handleSubmit = () => {
        createBook()
        navigate('/book')
    }

    return (
        <div className='book-container'>
        <div className='book-form-container'>
            <form onSubmit={handleSubmit} className='book-form'>
                <input type='text' value = {title} placeholder="Book Title" onChange={(e)=>{setTitle(e.target.value)}}/><br/>
                <input type='text' value = {image} placeholder="Book Image Link" onChange={(e)=>{setImage(e.target.value)}}/><br/>
                <input type='text' value = {link} placeholder="Book Link" onChange={(e)=>{setLink(e.target.value)}}/><br/>
                <textarea value={description} placeholder="Book Description" onChange={(e) => { setDescription(e.target.value)}} className='textarea' />
                <button type='submit' className='subButton'>Submit</button>
            </form>
        </div>
      </div>
    )
}
