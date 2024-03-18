import React, { useContext, useState } from 'react';
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import assets from '../../assets';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from '../../hooks/useForm';
import { UserContext } from '../../context/UseContext';
import { fetchApiCyberSecure } from '../../helpers/fetchData';
import AlertComponent from '../../components/common/AlertComponent';

interface ResponseProps {
    code: number,
    message: string,
    data: any
};

const ProfilePage = () => {

    const [alert, setAlert] = useState({ show: false, severity: '', title: '', description: '' });
    const { dataUser }: any = useContext(UserContext);

    const initialForm = {
        nombres: dataUser.name,
        apellidos: dataUser.lastName,
        email: dataUser.email,
        celular: dataUser.phone,
        direccion: dataUser.address,
        empresa: dataUser.enterprise,
        user: dataUser.user,
        password: '',
    }
    

    const { nombres, apellidos, email, celular, direccion, empresa, user, password, onInputChange }: any = useForm(initialForm);

    const handleCloseAlert = () => {
        setAlert(prev => ({ ...prev, show: false }));
    };

    const HandleSubmit = async () => {
        try {
            // Define los parámetros que deseas enviar
            const params = { 'id': dataUser.id, 'name': nombres, 'lastName': apellidos, 'email': email, 'phone': celular, 'address': direccion, 'enterprise': empresa, 'user': user, 'password': password };
            // Realiza la solicitud con la función fetchApiCyberSecure y pasa los parámetros
            const data: ResponseProps = await fetchApiCyberSecure('POST', '/updateUser', params);
            if (data.code === 2) {
                setAlert({ show: false, severity: 'success', title: 'Exitoso', description: 'Se guardaron los cambios correctamente.' });
                setTimeout(handleCloseAlert, 2000);
            } else if(data.code === 1) {
                setAlert({ show: true, severity: 'error', title: 'Error', description: 'Problemas al guardar los cambios.' });
                setTimeout(handleCloseAlert, 2000);
            }
        } catch (error) {
            console.error('Error al editar su perfil:', error);
            setAlert({ show: true, severity: 'error', title: 'Error', description: 'Ha ocurrido un error durante el guardado de cambios.' });
            setTimeout(handleCloseAlert, 2000);
        }
    }

    return (
        <div>
            {alert.show
                && (
                    <div style={{ position: 'absolute', top: '38px', width: '80%', height: '100%', marginTop: '30px' }}>
                        <AlertComponent severity={alert.severity} title={alert.title} description={alert.description} />
                    </div>
                )
            }
            <Typography variant='h6' color={"#fff"} style={{ marginBottom: '20px' }}>
                Perfil del Usuario
            </Typography>

            <Avatar
                alt="logo-user"
                src={assets.images.profile}
                sx={{
                    width: 100,
                    height: 100,
                    margin: '28px auto',
                    border: '2px solid #A31217',
                    '@media (max-width:600px)': {
                        width: 70, // Más pequeño en pantallas móviles
                        height: 70,
                        margin: '20px auto',
                    }
                }}
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
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name='user'
                            label="Usuario"
                            fullWidth
                            margin="normal"
                            color='error'
                            variant='filled'
                            sx={{ backgroundColor: 'white', borderRadius: 1 }}
                            value={user}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            required
                            name="password"
                            label="Contraseña"
                            fullWidth
                            margin="normal"
                            color='error'
                            variant='filled'
                            sx={{ backgroundColor: 'white', borderRadius: 1 }}
                            value={password}
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