import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
      Welcome
      </h1>
     <div className='mt-10'> 
     <Link to='/show-books'>
      <button>Go to Book list</button>
      </Link>
     </div>
    </div>
  )
}

export default Home
