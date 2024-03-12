import { Typography } from '@mui/material';
import React from 'react';
import CardComponent from '../../components/common/CardComponent';

type Props = {};

const HomePage = () => {
  return (
    <div>
      <Typography variant='h6' color={"#fff"} style={{marginBottom: '20px'}}>
        Temas de asesoría en Ciberseguridad
      </Typography>
      <CardComponent />
    </div>
  );
};

export default HomePage;