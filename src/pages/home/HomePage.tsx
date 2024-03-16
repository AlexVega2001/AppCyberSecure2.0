import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/common/CardComponent';
import dataProtected from '../../assets/images/ProteccionDatos.png'
import { fetchApiCyberSecure } from '../../helpers/fetchData';


interface Issue {
  id: number;
  name: string;
  description: string;
  // Añade aquí otras propiedades si las hay
}

const HomePage = () => {

  const [data, setData] = useState<Issue[]>([]);

  useEffect(() => {
    const handleData = async () => {
      const fetchData: Issue[] = await fetchApiCyberSecure('GET', '/listIssues');
      setData(fetchData);
    }
    handleData();
  }, [])
  

  return (
    <div>
      <Typography variant='h6' color={"#fff"} style={{marginBottom: '20px'}}>
        Temas de asesoría en Ciberseguridad
      </Typography>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 10}}>
      {data.map((item, index) => (
          <CardComponent 
            key={index}
            title={item.name} 
            description={item.description} 
            image={dataProtected}
            objectFit='cover'
            btnName='Ver más'
            id={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;