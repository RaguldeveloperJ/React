import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Recipes = () => {
    
     const [taste,setTast]=useState([])
     const [err,SetErr]=useState(null)

     useEffect(
        ()=>{
          axios.get("https://dummyjson.com/recipes")
          .then((response)=>{
               setTast(response.data.recipes)
          })
          .catch((err)=>{
            SetErr(err.message)
          })
        },[]
     )
     if(err) return <p>Error :{err}</p>
  return (
    <>
    <h1 className='heading'>Api Calls(using Table with Image)</h1>
        <table border='1' rules='all' cellPadding='10px' >
            <thead >
                <tr>
                    <th>Id</th>
                    <th>Recipe-name</th>
                    <th>Recipe-Image</th>
                </tr>
            </thead>
            {
                taste.map((i)=>{
                    return(
                        <tbody key={i.id} className='tbody-image'>
                          <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td><img src={i.image} alt={i.name}/></td>
                          </tr>
                        </tbody>
                    )
                })
            }
        </table>
    </>
  )
}

export default Recipes