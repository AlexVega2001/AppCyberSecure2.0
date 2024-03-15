import React from 'react'
import { Link, useParams } from 'react-router-dom';
import CardComponent from '../../components/common/CardComponent';
import lawFirm from '../../assets/images/Law firm.png'
import agreement from '../../assets/images/agreement.png'
import recommendation from '../../assets/images/recommendation.png';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomeResourcesPage = () => {
    const { id } = useParams();
    console.log("IdCard: " + id)

    const handleResources = () => {
        console.log("Hola")
    }

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant='h6' color={"#fff"} style={{ marginBottom: '20px' }}>
                    Recursos para la Protección de Datos
                </Typography>
                <Link to='/home' >
                    <Button variant="contained" size="medium" startIcon={<ArrowBackIcon />} sx={{bgcolor: '#A31217'}}>Regresar</Button>
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 10 }}>
                <CardComponent 
                    title={'Leyes'} 
                    description='Información sobre protección de datos' 
                    image={lawFirm} 
                    isModal={true}
                    objectFit='contain'
                    btnName='Ver más'/>
                <CardComponent 
                    title={'Convenios'} 
                    description='Información sobre protección de datos' 
                    image={agreement} 
                    isModal={true}
                    objectFit='contain'
                    btnName='Ver más'/>
                <CardComponent 
                    title={'Recomendaciones'} 
                    description='Información sobre protección de datos' 
                    image={recommendation} 
                    isModal={true}
                    objectFit='contain'
                    btnName='Ver más'/>
            </div>
        </>
    )
}

export default HomeResourcesPage