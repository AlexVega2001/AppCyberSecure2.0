import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import lawFirm from '../../assets/images/Law firm.png'
import CloseIcon from '@mui/icons-material/Close';
import { Resource } from '../../interfaces/Resource.interface';
import { fetchApiCyberSecure } from '../../helpers/fetchData';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import assets from '../../assets';
import ChildModalComponent from './ChildModalComponent';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#282828',
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly'
}

type ModalProps = {
    hideModal: () => void;
    open: boolean;
    idModal?: number;
    idTypeResource?: number;
    titleResource: string
}

export const ModalComponent: FC<ModalProps> = ({ hideModal, open, idModal, idTypeResource, titleResource }) => {

    const [data, setData] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedIdResource, setSelectedIdResource] = useState(0);

    const handleCloseDialog = () => {
        hideModal();
    };

    const handleOpenModal = (idResourcePdf: number) => {
        setSelectedIdResource(idResourcePdf);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Iniciar carga
                // Define los parámetros que deseas enviar
                const params = { 'id': idModal, 'recurso': idTypeResource };
                // Realiza la solicitud con la función fetchApiCyberSecure y pasa los parámetros
                const data = await fetchApiCyberSecure('GET', '/listResources', params);
                setData(data);
            } catch (error) {
                setData([]);
                console.error('Error al obtener datos:', error);
            } finally {
                setLoading(false); // Finalizar carga, independientemente de si hay un error o no
            }
        };

        fetchData();
    }, [idModal, idTypeResource]);

    return (
        <Modal
            open={open}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            sx={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}
        >
            <Grid container sx={{ ...style, maxWidth: '100%', maxHeight: '100%' }}>
                <Grid item xs={11} >
                    <Typography variant='h6' color={"#fff"} style={{ color: "#A31217", fontWeight: "bold", textAlign: "center" }}>
                        {titleResource}
                    </Typography>
                </Grid>
                <Grid item xs={1} >
                    <CloseIcon onClick={handleCloseDialog} sx={{ color: 'white', width: 38, height: 38, cursor: 'pointer' }} />
                </Grid>
                <Grid item xs={12} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)', paddingRight: 2 }}>
                    {
                        loading
                            ?
                            ( // Mostrar indicador de carga si se están cargando los datos
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <span className='loader'></span>
                                </div>
                            )
                            :
                            (
                                <div>
                                    {
                                        data.length > 0
                                            ?
                                            data.map((item, index) => (
                                                <Grid item xs={12} key={index}>
                                                    <Card sx={{ display: 'flex', maxWidth: 800, marginTop: 1, marginBottom: 2, backgroundColor: '#7A7A7A', borderRadius: '10px' }}>
                                                        <CardMedia
                                                            component="img"
                                                            alt="card image"
                                                            image={lawFirm}
                                                            sx={{ objectFit: 'contain', width: '30%', height: 200 }}
                                                        />
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                                <Typography component="div" variant="h6">
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                                    {item.fullText}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                                                <Button variant="contained" size="medium" color='error' startIcon={<PictureAsPdfIcon />} onClick={() => { handleOpenModal(item.id) }}>Ver PDF</Button>
                                                            </CardActions>
                                                        </Box>
                                                    </Card>
                                                </Grid>
                                            ))
                                            :
                                            <Grid item xs={12}>
                                                <Avatar
                                                    alt="logo-noResult"
                                                    src={assets.images.noResult}
                                                    sx={{ width: '40%', height: '40%', margin: '0 auto' }}
                                                />
                                                <Typography variant='h6' color={"#fff"} style={{ textAlign: 'center' }}>
                                                    No se encontraron resultados.
                                                </Typography>
                                            </Grid>
                                    }
                                    {showModal && <ChildModalComponent
                                        hideModal={handleCloseModal}
                                        idTypeResource={idTypeResource}
                                        idResource={selectedIdResource}
                                        open={open} />}
                                </div>
                            )
                    }
                </Grid>
            </Grid>
        </Modal>
    );
}