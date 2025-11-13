import React, { useEffect, useState } from "react";
import axios from "axios";


const Api = () => {
  const [state, setState] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setState(response.data.products);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);
  if (err) return <p>Error :{err}</p>;

  return (
    <>
      <h1 className="heading">Api Calls(Using-Ordered List)</h1>
      <div className="container-Api">
        {state.map((i) => {
          return (
            <div key={i.id}>
              <div className="subcontainer-Api">
                <ol>
                  <li>
                    <strong>Title :</strong> {i.title}
                  </li>
                  <li>
                    <strong>Category :</strong> {i.category}
                  </li>
                  <li>
                    <strong>Price :</strong> ₹{i.price}
                  </li>
                </ol>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default Api;
