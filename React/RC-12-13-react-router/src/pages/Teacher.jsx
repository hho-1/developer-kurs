import {useState, useEffect} from "react"
//!useEffect teki People.jsx componenti
import {Container,Row,Col} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
const Teacher = () => {
  const navigate = useNavigate();

  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);
  console.log(insanlar);

  //!böyle tıkladığım kişiyi getirebilirim (tekrar api den id li fetch işlemi ile) ama sadece bu sayfadaki tag lerle bastırılır, ek olarak go back go home butonu ekleyemem, baştan o butonlar olsa bile geri dönmek için tekrar api den fetch işlemi gerekir
  // const getir=(id)=>{
  // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //    .then((res) => res.json())
  //    .then((data) => setInsan([data]))

  // }

  return (
    <Container className="text-center">
      <Row>
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <Col sm={12} md={6} lg={4} key={id}>

{/* img yi Link ile sarmallayıp yol belirterekte çözebilirdim ama Link id gibi bir değişkenle yol alamıyor, o yüzden useNavigate */}

              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
                style={{ cursor: "pointer" }}
                // onClick={()=>{getir(id)}}
               onClick={() => navigate(`/teacher/${id}`)} 
              />
              <h5>{name}</h5>
              <h6>{phone}</h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Teacher