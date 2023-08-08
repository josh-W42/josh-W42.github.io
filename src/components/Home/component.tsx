import { FunctionComponent } from 'react';
import Image from 'react-bootstrap/Image';
import { Grid, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

interface Props {
  titles: (string | number)[];
}

export const HomeComponent: FunctionComponent<Props> = ({ titles }) => {
  return (
    <div
      id="HomeContainer"
      className="bg-transparent text-center position-absolute top-50 start-50 translate-middle"
    >
      <Grid container justifyContent={'space-evenly'} direction="column">
        <Grid item>
          <Image
            src="https://res.cloudinary.com/dom5vocai/image/upload/v1615930252/new_logo_bwgzbl.png"
            rounded
          />
        </Grid>
        <Grid
          item
          sx={{
            fontSize: '1.5rem',
            color: '#E5E5E5',
            fontWeight: 'bold',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
              color: '#E5E5E5',
              fontWeight: 'bold',
            }}
          >
            Hi, my name is Josh Wilson.
          </Typography>
          <TypeAnimation
            sequence={titles}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </Grid>
      </Grid>
    </div>
  );
};
