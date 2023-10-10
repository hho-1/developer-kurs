



import {useState} from "react";
import {Container, Button} from "react-bootstrap"
//!event-hooks tan Form.jsx
const ContactForm = () => {
const [userAd, setUserad]=useState("")
const [password,setPassword]=useState("")
const [country,setCountry]=useState("")


const formAlindi = () => {
  
 alert(`Username: ${userAd}
        Password: ${password}
        Country:  ${country}
 `)
};

  return (
    // ******************div=>Container
    
    <Container className=" text-center mt-4">
     
      <h1 className="text-center">FORMS (EVENTS) </h1>

   <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger fw-bold">{userAd}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setUserad(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label" htmlFor="country">
            Country: <span className="text-danger fw-bold">{country}</span>
          </label>
          <select
            className="form-select"
            id="country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>

        
        {/* ****************** */}
        <Button  variant="success"  type="submit" >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default ContactForm