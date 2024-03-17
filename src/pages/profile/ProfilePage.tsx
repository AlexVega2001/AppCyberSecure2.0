import React from 'react';
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import assets from '../../assets';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from '../../hooks/useForm';

type Props = {};

const ProfilePage = (props: Props) => {

    const initialForm = {
        nombres: '',
        apellidos: '',
        email: '',
        celular: '',
        direccion: '',
        empresa: '',
    }

    const { nombres, apellidos, email, celular, direccion, empresa, onInputChange }: any = useForm(initialForm);

    const HandleSubmit = () => {
        console.log('Data del Formulario: ' + nombres);
    }

    return (
        <div>
            <Typography variant='h6' color={"#fff"} style={{ marginBottom: '20px' }}>
                Perfil del Usuario
            </Typography>
            <Avatar
                alt="logo-user"
                src={assets.images.profile}
                sx={{ width: 100, height: 100, margin: '20px auto', border: '2px solid #A31217'}}
            />
            <Box sx={{ backgroundColor: "#7A7A7A", height: '100%', width: '100%', borderRadius: '10px', padding: '40px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name='nombres'
                            label="Nombres"
                            fullWidth
                            color='error'
                            variant='filled'
                            sx={{backgroundColor: 'white', borderRadius: 1}}
                            value={nombres}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name="apellidos"
                            label="Apellidos"
                            fullWidth
                            color='error'
                            variant='filled'
                            sx={{backgroundColor: 'white', borderRadius: 1}}
                            value={apellidos}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name="email"
                            label="Email"
                            fullWidth
                            color='error'
                            variant='filled'
                            sx={{backgroundColor: 'white', borderRadius: 1}}
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name="celular"
                            label="Celular"
                            type='number'
                            fullWidth
                            color='error'
                            variant='filled'
                            sx={{backgroundColor: 'white', borderRadius: 1}}
                            value={celular}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name="direccion"
                            label="Dirección"
                            fullWidth
                            color='error'
                            variant='filled'
                            sx={{backgroundColor: 'white', borderRadius: 1}}
                            value={direccion}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name="empresa"
                            label="Empresa"
                            fullWidth
                            color='error'
                            variant='filled'
                            sx={{backgroundColor: 'white', borderRadius: 1}}
                            value={empresa}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{display: 'grid', placeItems: 'center', my: '10px'}}>
                        <Button 
                            variant="contained" 
                            size="medium" 
                            color='error' 
                            sx={{
                                bgcolor: '#A31217', marginTop: '20px', height: '50px', '&:hover': {
                                    bgcolor: '#D32F2F', // por ejemplo, rojo oscuro para el hover
                                },
                                '&.Mui-focused': {
                                    bgcolor: '#D32F2F', // el mismo rojo oscuro para el focus
                                }}}
                            startIcon={<SaveIcon />} 
                            onClick={HandleSubmit}>
                                Guardar cambios
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default ProfilePage;