import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { DialogComponent } from './DialogComponent';

type CardProps = {
    title: string;
    description: string;
    image?: string;
    width?: number | string;
    height?: number | string;
    isModal?: boolean;
    objectFit?: "contain" | "cover" | "fill" | "inherit" | "initial" | "none" | "revert" | "scale-down" | undefined;
    display?: "block" | "flex" | "grid" | undefined;
    bgCard?: string;
    horizontal?: boolean;
    btnName: string;
    id?: number;
    recurso?: number;
}

const CardComponent = ({recurso, id, title, description, image, width=300, height=200, isModal=false, objectFit= "contain", display="block", bgCard="#7A7A7A", horizontal=false, btnName}: CardProps) => {
    const [open, setOpen] = useState(false);
    const HandleOpenModal = (id: number) => {
        setOpen(true);
    }

    console.log(id);

    const HandleCloseModal = () => {
        setOpen(false);
    }

    return (
        <div>
            {
                horizontal ?
                    (
                        <Card sx={{ display: display, maxWidth: width, marginTop: 1, marginBottom: 1, backgroundColor: bgCard, borderRadius: '10px'}}>
                            <CardMedia
                                component="img"
                                alt="card image"
                                image={image}
                                sx={{ objectFit: objectFit, width: '30%', height: 200 }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                    {
                                        isModal ?
                                            <Button variant="contained" size="medium" color='error' startIcon={<RemoveRedEyeIcon />} onClick={() => HandleOpenModal(1)}>{ btnName }</Button>
                                            :
                                            <Link to={`/home/recursos/${1}`} >
                                                <Button variant="contained" size="medium" color='error' startIcon={<RemoveRedEyeIcon />}>
                                                    { btnName }
                                                </Button>
                                            </Link>
                                    }
                                </CardActions>
                            </Box>
                        </Card>
                    )    
                :
                    (

                        <Card sx={{ display: display, maxWidth: width, marginTop: 1, marginBottom: 1, backgroundColor: bgCard, borderRadius: '10px' }}>
                            <CardMedia
                                component="img"
                                alt="card image"
                                height={height}
                                width={height}
                                image={image}
                                sx={{ objectFit: objectFit }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#A31217", fontWeight: "bold" }}>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1" color="white">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                {
                                    isModal ?
                                        <Button variant="contained" size="medium" color='error' startIcon={<RemoveRedEyeIcon />} onClick={() => HandleOpenModal(1)}>Ver más</Button>
                                        :
                                        <Link to={`/home/recursos/${id}/${title}`} >
                                            <Button variant="contained" size="medium" color='error' startIcon={<RemoveRedEyeIcon />}>Ver más</Button>
                                        </Link>
                                }
                            </CardActions>
                        </Card>
                    )
            }
            <DialogComponent open={open} hideDialog={HandleCloseModal}/>
        </div>
    );
};

export default CardComponent;