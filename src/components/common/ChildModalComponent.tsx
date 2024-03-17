import { Avatar, Box, Grid, Modal, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { fetchApiCyberSecure } from '../../helpers/fetchData';
import assets from '../../assets';
import { PDFViewer } from '../../interfaces/PdfViewer.interface';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 800,
    bgcolor: '#282828',
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly'
}

type ModalChildProps = {
    hideModal: () => void;
    open: boolean;
    idResource: number;
    idTypeResource: number | undefined;
}

const ChildModalComponent: FC<ModalChildProps> = ({ hideModal, open, idTypeResource, idResource }) => {

    const [pdfUrl, setPdfUrl] = useState<PDFViewer>({
        base64Content: '',
        name: '',
    });
    const [loading, setLoading] = useState(true);

    const handleClose = () => {
        hideModal();
    };

    useEffect(() => {
        const fetchPdf = async () => {
            try {
                setLoading(true);
                // const response = await fetch(`https://cyber-secure-be7c7289eff5.herokuapp.com/api/viewResources?id=${idResource}&recurso=${idTypeResource}`);
                // const blob = await response.blob(); 
                // Define los parámetros que deseas enviar
                const params = { 'id': idResource, 'recurso': idTypeResource };
                // Realiza la solicitud con la función fetchApiCyberSecure y pasa los parámetros
                const data = await fetchApiCyberSecure('GET', '/viewResources', params);
                // var binaryContent = Uint8Array.from(atob(data.base64Content), c => c.charCodeAt(0))

                // // Crea un blob con el contenido decodificado
                // var blob = new Blob([binaryContent], { type: 'application/pdf' });

                // // Crea una URL de objeto para el blob
                // var url = URL.createObjectURL(blob);
                setPdfUrl({
                    base64Content: data,
                    name: data.name,
                });
            } catch (error) {
                console.error('Error al cargar el PDF:', error);
                setPdfUrl({
                    base64Content: '',
                    name: '',
                }); // Reiniciar el estado del PDF si hay un error al cargarlo
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
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style }}>
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
                                    pdfUrl
                                        ? (
                                            <iframe src={`data:application/pdf;base64,${pdfUrl.base64Content}`} style={{width: '100%', height: style.height - 40 , border: 'none'}}></iframe>
                                                
                                        )
                                        : (
                                            <Grid item xs={12} sx={{ border: '2p solid green' }}>
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
                            </div>
                        )
                }
            </Box>
        </Modal>
    );
}

export default ChildModalComponent
