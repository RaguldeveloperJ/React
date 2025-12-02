import React from "react";
import Controlled from './Controlled'
import Uncontrolled from './uncontrolled'

const ES6 = () => {



  let sum = (...x) => {
    console.log(x);

    return x.length;
  };
  let y = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 76, 5);
  console.log(y);


  let Arrow = [999, 666, 777, 555, 333, 222, 444, 4];

  const totalValue = Arrow.reduce((value1, value2) => {
    return value1 + value2;
  });
  console.log(totalValue);



  const student = {
    name: "Ragul",
    age: 25,
    place: "TamilNadu",
    collage: "Annamalai University",
    dept: "BCA",
    Year: "2024",
  };
  let litral = `Hi I am ${student.name},I am ${student.age} form ${student.place} and completed the degree  in ${student.collage} Dept is ${student.dept} passed out at ${student.Year}`;
  console.log(litral);



  let a = [3, 4, 6, 8, 9];
  let b = [5, 6, 7, 8];
  let c = [9, 7, 6, 8];
  let d = [...a, ...b, ...c];
  console.log(d);
  let f = [...d, 555];
  console.log(f);
  let ab = [...a.slice(0, 2), 999, ...a.slice(2)];
  console.log(ab);

  let str = ["hello", "hi", "bye"];
  let str1 = ["Ragul", "Thulasi", "Nikith"];
  let str2 = [...str, ...str1];
  console.log(str2);
  
  let [name, ...guys] = str1;
  console.log(name);
  console.log(guys);

  let str3 = [...str1, "Murali"];
  console.log(str3);

  let n = [12, 34, 56, 78, 88];
  let [g, ...h] = n;
  console.log(g);
  console.log(h);

  return (
    <>
      <div>
        <h1>Rest Operator(...Variable)</h1>
        <p>
          <strong>Total Count is :</strong> {y}
        </p>
      </div>

      <div>
        <h1>Arrow Function</h1>
        <p>
          <strong>Total Value is :</strong>
          {totalValue}
        </p>
      </div>

      <div>
        <h1>template Litrals</h1>
        <p>{litral}</p>
      </div>
      <div>
        <h1>spread operator</h1>
        <p>
          <strong>Merging three Array :</strong>
          {d}
        </p>
        <p>
          <strong>Add element at the end :</strong>
          {f}
        </p>
        <p>
          <strong>Add elenent at Middle :</strong>
          {ab}
        </p>
        <p>
          <strong>Array destructing :</strong>
          {h}
        </p>
        <p>
          <strong>object destructing :</strong>
          {guys}
        </p>
        <p>
          <strong>Merging strings:</strong>
          {str2}
        </p>
      </div>
      <Controlled/>
      <Uncontrolled/>
    </>
  );
};

export default ES6;
