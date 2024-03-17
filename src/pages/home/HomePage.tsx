import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/common/CardComponent';
import dataProtected from '../../assets/images/ProteccionDatos.png'
import { fetchApiCyberSecure } from '../../helpers/fetchData';
import assets from '../../assets';
import '../styles.pages.css';
import { Issue } from '../../interfaces/Issue.interface';

const HomePage = () => {

  const [data, setData] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleData = async () => {
      try {
        setLoading(true); // Iniciar carga
        const fetchData: Issue[] = await fetchApiCyberSecure('GET', '/listIssues');
        setData(fetchData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Setear datos vacíos si hay un error durante la carga de datos
      } finally {
        setLoading(false); // Finalizar carga, independientemente de si hay un error o no
      }
    }
    handleData();
  }, [])
  

  return (
    <div>
      <Typography variant='h6' color={"#fff"} style={{ marginBottom: '20px' }}>
        Temas de asesoría en Ciberseguridad
      </Typography>
      {loading ? ( // Mostrar indicador de carga si se están cargando los datos
        <div className='loader-container'>
            <span className='loader'></span>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 10 }}>
          {
            data.length > 0
              ?
              data.map((item, index) => (
                <CardComponent
                  key={index}
                  title={item.name}
                  description={item.description}
                  image={dataProtected}
                  objectFit='cover'
                  btnName='Ver más'
                  idIssue={item.id} />
              ))
              :
              <Box>
                <Avatar
                  alt="logo-noResult"
                  src={assets.images.noResult}
                  sx={{ width: 300, height: 300, margin: '0 auto' }}
                />
                <Typography variant='h5' color={"#fff"} style={{ textAlign: 'center' }}>
                  No se encontraron resultados.
                </Typography>
              </Box>
          }
        </div>
      )}
    </div>
  );
};

export default HomePage;