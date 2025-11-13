import React, { useState, useEffect } from "react";
import axios from "axios";


const Api1 = () => {
  const [post, setPost] = useState([]);
  const [errs, setErrs] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setPost(response.data.users);
      })
      .catch((err) => {
        setErrs(err.message);
      });
  }, []);
  if (errs) return <p>Error :{errs}</p>;
  return (
    <>
      <h1 className="heading">Api call(using card)</h1>
      <div className="container-Api">
        {post.map((i) => {
          return (
            <div key={i.id}>
              <div className="subcontainer-Api1">
                <img src={i.image} alt={i.firstName} />
                <p>
                  <strong>FirstName :</strong> {i.firstName}
                </p>
                <p>
                  <strong>Email :</strong> {i.email}
                </p>
                <p>
                  <strong>PhoneNo :</strong> {i.phone}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default Api1;
