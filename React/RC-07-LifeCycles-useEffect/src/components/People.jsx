import axios from "axios";
import React, { useEffect, useState } from "react";

const People = () => {
 
  const [insanlar, setInsanlar] = useState([])

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setInsanlar(data))    
  
    
  }, []) */
  

  //! axios ile veri getirme 2.yol

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.data))
  
    
  }, [])
  

 




  return (
    
    <div className="container">
      <div className="row">
        {insanlar.map(({id, name, phone}) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={id}>
            <img src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`} alt=""/>
            <h1>{name}</h1>
            <h5>{phone}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
