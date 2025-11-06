import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Form from "./Form"
import Counts from "./Counts"
import Home from './Home';
import Props from './Props';
import Events from './Events'

const Approuter = () => {
   const person={ name: "Ragul", age: 25, city: "Tamilnadu" };
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Form' element={<Form />} />
        <Route path='/count' element={<Counts />} />
        <Route path='/props' element={<Props  name={person.name} age={person.age} city={person.city} />} />
        <Route path='/Events' element={<Events />} />

      </Routes>

    </>
  )
}

export default Approuter