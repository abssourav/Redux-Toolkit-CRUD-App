import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from './bookSlice'
import { Link } from 'react-router-dom'

const BooksView = () => {

    const books = useSelector((state) => state.bookReducer.books)

    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteBook(id))
    }
 
    return (
        <div className='w-full '>
            <h2 className='text-red-500 text-[2rem]'>Book List</h2>
            <table className='m-auto'>
                
                <thead >
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book) => {
                        const {id,title,author} = book
                        return <tr key={id}> 
                            {/* <td>{book.id}</td> */}
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                {/* edit button  */}
                               <Link to='/edit-book' state={{id,title,author}}>
                               <button>Edit</button>
                               </Link>

                                {/* //delete book button */}
                                <button onClick={()=> handleDelete(book.id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default BooksView
