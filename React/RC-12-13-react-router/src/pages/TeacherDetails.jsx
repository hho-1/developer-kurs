import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap';

import {useParams, useNavigate} from "react-router-dom"

const TeacherDetails = () => {
  //!buradaki go home butonları için useNavigate
  const navigate = useNavigate();

  //!teacher dan yollanan id yi useParams ile buraya tanıttık
  const { id } = useParams();

  const [kisi, setKisi] = useState({});
  //! apide id ile tek eleman getirme özelliği de var, dolayısıyla dizinin içinde dolaşmaya gerek yok, id ile (fetch) tek eleman getirdik ve bastırdık, her id değişikliğinde fetch tekrar çalışsın dedik
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data));
  }, [id]);
// console.log(kisi);
  return (
    <Container className="text-center mt-4">
     
      <div>
        <h3>{kisi.name}</h3>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt=""
          width="300px"
        />
        <h4>{kisi.email}</h4>
        <h5>{kisi.phone}</h5>
        <h6>{kisi.website}</h6>

        <div>
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Go Back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-danger">
            Go Home
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TeacherDetails