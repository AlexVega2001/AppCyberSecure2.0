import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import dataProtected from '../../assets/images/ProteccionDatos.png'
import React from 'react'

const CardComponent = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    component="img"
                    alt="card image"
                    height="100"
                    image={dataProtected}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Protección de los datos
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        La protección de datos se refiere a los derechos de las personas cuyos datos se recogen, se mantienen y se procesan.
                    </Typography>
                </CardContent>
                <CardActions style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="contained" size="medium" color='error' >Ver más</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardComponent;