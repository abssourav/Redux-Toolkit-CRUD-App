import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './bookSlice'


const EditBook = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title,setTitle] = useState(location.state.title)
    const [author,setAuthor] = useState(location.state.author)


    const handleSubmit= (e) =>{
        e.preventDefault()
        dispatch(updateBook({id:location.state.id, title , author}))
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
        <button type='submit'>Edit Book</button>
      </form>
    </div>
  )
}

export default EditBook
