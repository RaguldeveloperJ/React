import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipes from './Recipes'

const Api2 = () => {
  const [get, setGet] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/comments")
      .then((response) => {
        setGet(response.data.comments);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);
  if (err) return <p>Error :{err}</p>;
  return (
    <>
      <h1 className="heading">Api Call(using Table)</h1>
      <div >
         <table  className="table-container">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Fullname</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
        {get.map((i) => {
          return (
                <tr key={i.id}>
                  <td>{i.user.id}</td>
                  <td>{i.user.username}</td>
                  <td>{i.user.fullName}</td>
                  <td>{i.body}</td>
                </tr>
              
            
          );
        })}
        </tbody>
        </table>
      </div>
      <br /><br />
      <Recipes/>
    </>
  );
};

export default Api2;
