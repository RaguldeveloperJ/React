import React from 'react'
import { Link } from 'react-router-dom'


const Anchors = () => {
  return (
    <>
      <nav>
        <h1>Website</h1>
        <ul>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to="/Form" className='link'>Form</Link></li>
          <li><Link to="/Count" className='link'>Count</Link></li>
          <li><Link to="/Props" className='link'>Props</Link></li>
          <li><Link to="/Events" className='link'>Events</Link></li>
          <li><Link to="/Api" className='link'>Api</Link></li>
        </ul>
      </nav>

    </>


  )
}

export default Anchors;