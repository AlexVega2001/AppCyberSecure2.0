import React from 'react'
import { Link, useParams } from 'react-router-dom';
import CardComponent from '../../components/common/CardComponent';
import lawFirm from '../../assets/images/Law firm.png'
import agreement from '../../assets/images/agreement.png'
import recommendation from '../../assets/images/recommendation.png';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomeResourcesPage = () => {

    const { id, title } = useParams();

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant='h6' color={"#fff"} style={{ marginBottom: '20px' }}>
                    Recursos para la {title}
                </Typography>
                <Link to='/home' >
                    <Button variant="contained" size="medium" startIcon={<ArrowBackIcon />} sx={{bgcolor: '#A31217', '&:hover': {
                                    bgcolor: '#D32F2F', // por ejemplo, rojo oscuro para el hover
                                },
                                '&.Mui-focused': {
                                    bgcolor: '#D32F2F', // el mismo rojo oscuro para el focus
                                }}}>Regresar</Button>
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 10 }}>
                <CardComponent 
                    title={'Leyes'} 
                    description='Las leyes de ciberseguridad son un conjunto de regulaciones diseñadas para proteger a las redes, dispositivos y datos de ataques, daños o accesos no autorizados.'
                    image={lawFirm} 
                    isModal={true}
                    objectFit='contain'
                    btnName='Ver más'
                    idIssue={Number(id)}
                    idTypeResource={1}/>
                <CardComponent 
                    title={'Convenios'} 
                    description='Los convenios de ciberseguridad son acuerdos internacionales entre países para cooperar en la protección contra amenazas cibernéticas.' 
                    image={agreement} 
                    isModal={true}
                    objectFit='contain'
                    btnName='Ver más'
                    idIssue={Number(id)}
                    idTypeResource={2}/>
                <CardComponent 
                    title={'Recomendaciones'} 
                    description='Las recomendaciones de ciberseguridad se enfocan en proteger la información y los sistemas informáticos frente a amenazas digitales.' 
                    image={recommendation} 
                    isModal={true}
                    objectFit='contain'
                    btnName='Ver más'
                    idIssue={Number(id)}
                    idTypeResource={3}/>
            </div>
        </>
    )
}

export default HomeResourcesPage