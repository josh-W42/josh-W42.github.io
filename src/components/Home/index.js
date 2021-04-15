import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image'
import { useState } from 'react';
import './home.css';
import Typography from '@material-ui/core/Typography';
import Typist from 'react-typist';

const names = [
  "Full Stack Engineer",
  "General Assembly",
  "Runner",
];

const Home = () => {

  const [currentName, setCurrentName] = useState(names[0]);


  return (
    <div id="HomeContainer" className="bg-transparent text-center position-absolute top-50 start-50 translate-middle">
      <Image src="https://res.cloudinary.com/dom5vocai/image/upload/v1615930252/new_logo_bwgzbl.png" rounded />
      <Typist
        cursor={
          {
            show: true,
            blink: true,
            element: '#',
            hideWhenDone: false,
            hideWhenDoneDelay: 1000,
          }
        }
        onTypingDone={() => setCzurrentName(names[1])}
      >
        <Typist.Delay ms={100} />
        <Typography color="secondary" variant="h3" component="h1">
          Hi, my name is Joshua Wilson
        </Typography>
        <Typist.Delay ms={500} />
        <Typography color="secondary" variant="h4" component="h2">
          I'm a... {currentName}
        </Typography>
        <Typist.Backspace count={currentName.length} delay={2000} />
      </Typist>
    </div>
  )
}

export default Home