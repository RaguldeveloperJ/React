import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Api from './Api'
import Api1 from './Api1'
import Api2 from './Api2'
import Recipes from './Recipes'

const Apicalls = () => {
  return (
    <>
       <nav>
        <ul>
            <li><Link to='/Apicalls/Api'>Ordered-List</Link></li>
            <li><Link to='/Apicalls/Api1'>Card</Link></li>
            <li><Link to='/Apicalls/Api2'>Table</Link></li>
            <li><Link to='/Apicalls/Recipes'>Table With Image</Link></li>
        </ul>
       </nav>

       <Routes>
        <Route path='Api' element={<Api/>}/>
        <Route path='Api1' element={<Api1/>}/>
        <Route path='Api2' element={<Api2/>}/>
        <Route path='Recipes' element={<Recipes/>}/>
       </Routes>

    </>
  )
}

export default Apicalls