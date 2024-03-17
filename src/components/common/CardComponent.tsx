import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ModalComponent } from './ModalComponent';

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
    idIssue?: number;
    idTypeResource?: number;
    recurso?: number;
}

const CardComponent = ({idIssue, idTypeResource, title, description, image, width=300, height=200, isModal=false, objectFit= "contain", display="block", bgCard="#7A7A7A", btnName}: CardProps) => {
    const [open, setOpen] = useState(false);
    const HandleOpenModal = () => {
        setOpen(true);
    }

    const HandleCloseModal = () => {
        setOpen(false);
    }

    return (
        <div>
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
                            <Button variant="contained" size="medium" color='error' startIcon={<RemoveRedEyeIcon />} onClick={() => HandleOpenModal()}>{btnName}</Button>
                            :
                            <Link to={`/home/recursos/${idIssue}/${title}`} >
                                <Button variant="contained" size="medium" color='error' startIcon={<RemoveRedEyeIcon />}>{btnName}</Button>
                            </Link>
                    }
                </CardActions>
            </Card>
            {/* Llama al componente DialogComponent solo cuando open es true */}
            {open && <ModalComponent open={open} hideModal={HandleCloseModal} idModal={idIssue} idTypeResource={idTypeResource} titleResource={title} />}
        </div>
    );
};

export default CardComponent;