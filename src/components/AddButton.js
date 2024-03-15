import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as AddBtn} from '../assets/add.svg'

export const AddButton = () => {
  return (
    <Link to = '/book/new' className='floating-btn'>
        <AddBtn />
    </Link>
  )
}
