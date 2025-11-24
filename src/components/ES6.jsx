import React from 'react'

const ES6 = () => {

    let sum=(...x)=>{
    console.log(x);
    
        return x.length
    }
    let y=sum(1,2,3,4,5,6,7,8,9,0,2,3,4,5,6,7,8,9,0,76,5)
    console.log(y);
  
    
    let Arrow=[999,666,777,555,333,222,444,4]

    const totalValue=Arrow.reduce((value1,value2)=>{
       return value1+value2
        
    })
    console.log(totalValue);
    
    const student={
        name:"Ragul",
        age:25,
        place:"TamilNadu",
        collage:"Annamalai University",
        dept:"BCA",
        Year:"2024"
    }
    console.log(`Hi I am ${student.name},I am ${student.age} form ${student.place} and completed the degree  in ${student.collage} Dept is ${student.dept} passed out at ${student.Year}`);
     

    
  return (
    <>
      <div>
        <h1>Rest Operator(...Variable)</h1>
        <h3>Total Count is : {y}</h3>
        
      </div>

      <div>
        <h1>Arrow Function</h1>
        <h3>Total Value is :{totalValue}</h3>
      </div>
    </>
  )
}

export default ES6