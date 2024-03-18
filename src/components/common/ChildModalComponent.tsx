import { Avatar, Grid, Modal, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import assets from '../../assets';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: '#282828',
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    alignItems: 'center',
    justifyContent: 'center'
}

type ModalChildProps = {
    hideModal: () => void;
    open: boolean;
    idResource: number;
    idTypeResource: number | undefined;
}

const ChildModalComponent: FC<ModalChildProps> = ({ hideModal, open, idTypeResource, idResource }) => {

    const [pdfUrl, setPdfUrl] = useState('');

    const [loading, setLoading] = useState(true);

    const handleClose = () => {
        hideModal();
    };

    useEffect(() => {
        const fetchPdf = async () => {
            try {
                const response = await axios.get(`https://cyber-secure-be7c7289eff5.herokuapp.com/api/viewResources?id=${idResource}&recurso=${idTypeResource}`, {
                    responseType: 'arraybuffer',
                });
                const blob = new Blob([response.data], { type: 'application/pdf' });

                // Crear una URL del blob para mostrar el PDF
                const pdfUrl = URL.createObjectURL(blob);

                setPdfUrl(pdfUrl);
            } catch (error) {
                console.error('Error al cargar el PDF:', error);
                setPdfUrl(''); // Reiniciar el estado del PDF si hay un error al cargarlo
            } finally {
                setLoading(false);
            }
        };
        if (open) {
            fetchPdf();
        }
    }, [open, idResource, idTypeResource]);

    return (
        <Modal
            open={open}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Grid container sx={{ ...style }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CloseIcon onClick={handleClose} sx={{ color: 'white', width: 38, height: 38, cursor: 'pointer', marginBottom: '10px' }} />
                </Grid>
                {
                    loading
                        ?
                        ( // Mostrar indicador de carga si se están cargando los datos
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='loader'></span>
                            </Grid>
                        )
                        :
                        (
                            <>
                                {
                                    pdfUrl
                                        ? (
                                            <Grid item xs={12} sx={{ width: '100%' }}>
                                                <iframe src={pdfUrl} width="100%" title="PDF Viewer" style={{ height: 'calc(100vh - 200px)', border: 'none' }}/>
                                            </Grid>
                                        )
                                        : (
                                            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <Avatar
                                                    alt="logo-noResult"
                                                    src={assets.images.noResult}
                                                    sx={{ width: '40%', height: '40%', margin: '0 auto' }}
                                                />
                                                <Typography variant='h6' color={"#fff"} style={{ textAlign: 'center' }}>
                                                    No se encontro un pdf.
                                                </Typography>
                                            </Grid>
                                        )
                                }
                            </>
                        )
                }
            </Grid>
        </Modal>
    );
}

export default ChildModalComponent
