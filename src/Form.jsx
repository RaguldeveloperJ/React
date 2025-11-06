import React, { useState } from "react";


export default function Form() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")



  function alertmsg(e) {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phonenumber = document.querySelector("#phonenumber").value;

    e.preventDefault();

    if (name === "" || email === "" || phonenumber === "") {
      alert("Please fill all the details");
      return;
    }

    setName(name);
    setEmail(email);
    setNumber(phonenumber);

    e.target.form.reset()

  }


  return (
    <>
      <div className="Maincontainer">
        <fieldset className='container'>
          <legend ><h1>Basic Details</h1></legend>
          <form>
            <div className='subcontainer'>
              <lable>Name:</lable>
              <input className='int' type="text" placeholder='Name' required id="name" />
            </div>
            <div className='subcontainer'>
              <lable>Email:</lable>
              <input className='int' type="email" placeholder='Email' required id="email" />
            </div>
            <div className='subcontainer'>
              <lable>PhoneNumber:</lable>
              <input type="number" className='int' placeholder='Number' required id="phonenumber" />
            </div>
            <div className='subcontainer'>
              <lable>Gender:</lable>
              <input type="radio" name='x' required id="gender" />
              <lable>Male</lable>
              <input type="radio" name='x' required id='gender' />
              <lable>Female</lable>
              <input type="radio" name='x' required id='gender' />
              <lable>Others</lable>
            </div>
            <div className='subcontainer'>
              <lable>State:</lable>
              <select>
                <option >--Select State--</option>
                <option >TamilNadu</option>
                <option >Karnataka</option>
                <option >Andhra-Pradesh</option>
              </select>
            </div>
            <div className='subcontainer'>
              <button onClick={alertmsg} type='submit'>Submit</button>
            </div>

          </form>
        </fieldset>
        <div className="outputcontainer">
          <h3><b>Name:  </b>{name}</h3>
          <h3><b>Email: </b>{email}</h3>
          <h3><b>Phonenumber: </b>{number}</h3>
        </div>
      </div>

    </>
  )

}