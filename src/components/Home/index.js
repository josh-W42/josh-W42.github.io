import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image'
import { useState } from 'react';
import './home.css';

const Home = () => {

  return (
    <div id="HomeContainer" className="bg-transparent text-center position-absolute top-50 start-50 translate-middle">
      <Image src="https://res.cloudinary.com/dom5vocai/image/upload/v1615930252/new_logo_bwgzbl.png" rounded />
    </div>
  )
}

export default Home