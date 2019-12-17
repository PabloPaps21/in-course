import React from 'react';
import { StyledHome } from '../styled-components/components';

import Carousel  from 'react-bootstrap/Carousel'

import { Link } from  'react-router-dom';


const imgCarousel = {minWidth:560};
const transbox ={
  margin: 30,
  backgroundColor: '#4a4646',
  border: '1 solid black',
  opacity: 0.7
}
const colorA = {
  color:'#FFF',
  marginRight: 10 
}

export default function Home() {
  return(
    <>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.up.edu.mx/sites/default/files//up_buho.jpg"
      alt="First slide"
      style={imgCarousel}
    />
    <Carousel.Caption>
      <div style={transbox}>
        <h3>Queremos que cumplas tus sueños</h3>
        <Link exact to="/signup" activeClassName="navbar-active" style={colorA}> Regístrate</Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/03/UNAM1.jpg"
      alt="Third slide"
      style={imgCarousel}
    />

    <Carousel.Caption>
    <div style={transbox}>
      <h3>¿Ya eres miembro?</h3>
      <Link exact to="/login" activeClassName="navbar-active" style={colorA}>Entra</Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.liderempresarial.com/wp-content/uploads/2017/06/tec-de-mty.jpg"
      alt="Third slide"
      style={imgCarousel}
    />

    <Carousel.Caption>
      <div style={transbox}>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<br/>
<br/>
<br/>
<br/>

  <StyledHome>
    <div className="encabezado">
        <h1>In-course PAPS 217</h1>
        <p>Ayuda alguién a cumplir sus sueños!
        </p>
    </div>
    

    <div className= "botones">
    <Link to="/signup">Sign up</Link>
    <Link to="/login">Log in</Link>
    </div>
 
  </StyledHome>
    </>
  )
}