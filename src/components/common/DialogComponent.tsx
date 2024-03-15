import { Dialog, DialogContent, DialogTitle, Grid, List, ListItem, Modal, Typography } from '@mui/material';
import React, { FC } from 'react';
import lawFirm from '../../assets/images/Law firm.png'
import CardComponent from './CardComponent';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 700,
    bgcolor: '#282828',
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly'
}

type ModalProps = {
    hideDialog: () => void;
    open: boolean;
    dataResources?: any;
}

export const DialogComponent: FC<ModalProps> = ({ hideDialog, open, dataResources }) => {
    const handleCloseDialog = () => {
        hideDialog();
    };

    return (
        // <Dialog open={open} style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}   >
        //     <DialogTitle>Leyes</DialogTitle>
        //     <DialogContent>
        //         <Grid item sx={{ ...style }} container spacing={2}>
        //             <Grid item xs={11}>
        //                 <Typography variant='h6' color={"#fff"} style={{ color: "#A31217", fontWeight: "bold", textAlign: "center" }}>
        //                     Leyes
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={1}>
        //                 <CloseIcon onClick={handleCloseDiagonal} sx={{ color: 'white', width: 38, height: 38 }} />
        //             </Grid>
        //             <Grid item xs={12}>
        //                 <CardComponent
        //                     title={'Leyes'}
        //                     description='Información sobre protección de datos'
        //                     image={lawFirm}
        //                     isModal={true}
        //                     objectFit='contain'
        //                     width={800}
        //                     horizontal={true}
        //                     display='flex'
        //                     btnName='Ver PDF' />
        //             </Grid>
        //             <Grid item xs={12}>
        //                 <CardComponent
        //                     title={'Convenios'}
        //                     description='Información sobre protección de datos'
        //                     image={lawFirm}
        //                     isModal={true}
        //                     objectFit='contain'
        //                     width={800}
        //                     horizontal={true}
        //                     display='flex'
        //                     btnName='Ver PDF' />
        //             </Grid>
        //             <Grid item xs={12}>
        //                 <CardComponent
        //                     title={'Recomendaciones'}
        //                     description='Información sobre protección de datos'
        //                     image={lawFirm}
        //                     isModal={true}
        //                     objectFit='contain'
        //                     width={800}
        //                     horizontal={true}
        //                     display='flex'
        //                     btnName='Ver PDF' />
        //             </Grid>
        //         </Grid>
        //     </DialogContent>
        // </Dialog>
        <Modal
            open={open}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            sx={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}
        >
            <Grid item sx={{ ...style }} container spacing={2}>
                <Grid item xs={11}>
                    <Typography variant='h6' color={"#fff"} style={{ color: "#A31217", fontWeight: "bold", textAlign: "center" }}>
                        Leyes
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <CloseIcon onClick={handleCloseDialog} sx={{ color: 'white', width: 38, height: 38 }} />
                </Grid>
                <Grid item xs={12}>
                    <CardComponent
                        title={'Leyes'}
                        description='Información sobre protección de datos'
                        image={lawFirm}
                        isModal={true}
                        objectFit='contain'
                        width={800}
                        horizontal={true}
                        display='flex'
                        btnName='Ver PDF' />
                </Grid>
                <Grid item xs={12}>
                    <CardComponent
                        title={'Convenios'}
                        description='Información sobre protección de datos'
                        image={lawFirm}
                        isModal={true}
                        objectFit='contain'
                        width={800}
                        horizontal={true}
                        display='flex'
                        btnName='Ver PDF' />
                </Grid>
                <Grid item xs={12}>
                    <CardComponent
                        title={'Recomendaciones'}
                        description='Información sobre protección de datos'
                        image={lawFirm}
                        isModal={true}
                        objectFit='contain'
                        width={800}
                        horizontal={true}
                        display='flex'
                        btnName='Ver PDF' />
                </Grid>
            </Grid>
        </Modal>
    );
}