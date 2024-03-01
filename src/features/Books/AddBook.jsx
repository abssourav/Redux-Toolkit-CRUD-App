import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from './bookSlice'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
  
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const id = uuidv4();
    dispatch(addBook({id,title,author}))
    navigate('/show-books',{replace:true})
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div>
          <label htmlFor="title">Title : </label>
          <input type="text" name='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="author">Author : </label> 
          <input type="text" name='author' value={author} onChange={(e)=> setAuthor(e.target.value)}/>
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
