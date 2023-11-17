import React from 'react'
import {Carousel} from "react-bootstrap"
import isa from "../img/isa.jpeg"
import devops from "../img/devops.jpeg"
import about from "../img/about.jpeg"


const Slider = () => {
  // !!!!!!!!!!!
  //! fade=soluklaşarak diğer resme geç, autoPlay={true} otomatik resim değiş, interval={5000} 5 saniyede bir
  return (
    <Carousel fade autoPlay={true} interval={5000}>
      <Carousel.Item>
        <img className="d-block w-100" src={isa} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={devops} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={about} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider