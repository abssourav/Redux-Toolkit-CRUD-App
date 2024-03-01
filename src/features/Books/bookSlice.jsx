import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {
            "id": 1,
            "title": "Love Bangladesh",
            "author": "Abs Sourav"
        },
        {
            "id": 2,
            "title": "Love Pakistan",
            "author": "Abu Bakkar"
        },
        {
            "id": 3,
            "title": "Love Palestine",
            "author": "Atikur Rahman"
        }
    ]
}

const bookSlice = createSlice({
    name: 'books-list',
    initialState: initialState,
    reducers: {
        showBooks: state => state,
        addBook: (state, action) => {
            const id = action.payload.id
            const title = action.payload.title
            const author = action.payload.author
            state.books.push({id,title,author})

        } ,
        deleteBook: (state,action) =>{
            const id = action.payload
            state.books = state.books.filter((book)=> book.id !== id)
        },
        updateBook: (state,action)=>{
            const id = action.payload.id
            const title = action.payload.title
            const author = action.payload.author

            const isBookExist = state.books.filter((book)=> book.id === id)
            if(isBookExist){
                isBookExist[0].title = title
                isBookExist[0].author = author
            }
        }
    }
})

export const {showBooks,addBook,deleteBook,updateBook} = bookSlice.actions

export default bookSlice.reducer