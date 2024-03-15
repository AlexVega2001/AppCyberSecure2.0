import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CardComponent from '../../components/common/CardComponent';
import dataProtected from '../../assets/images/ProteccionDatos.png'
import { fetchApiCyberSecure } from '../../helpers/fetchData';

const HomePage = () => {

  useEffect(() => {
    const handleData = async () => {
      const data = await fetchApiCyberSecure('GET', '/listIssues');
      console.log(data);
    }
    handleData();
  }, [])
  

  return (
    <div>
      <Typography variant='h6' color={"#fff"} style={{marginBottom: '20px'}}>
        Temas de asesoría en Ciberseguridad
      </Typography>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 10}}>
        <CardComponent 
          title={'Protección de datos'} 
          description='Información sobre protección de datos' 
          image={dataProtected} 
          objectFit='cover'
          btnName='Ver más'/>
        <CardComponent 
          title={'Protección de datos'} 
          description='Información sobre protección de datos' 
          image={dataProtected}
          objectFit='cover'
          btnName='Ver más'/>
        <CardComponent 
          title={'Protección de datos'} 
          description='Información sobre protección de datos' 
          image={dataProtected} 
          objectFit='cover'
          btnName='Ver más'/>
      </div>
    </div>
  );
};

export default HomePage;