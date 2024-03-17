import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import assets from '../../assets';
import { useForm } from '../../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { fetchApiCyberSecure } from '../../helpers/fetchData';
import AlertComponent from '../../components/common/AlertComponent';

interface ResponseProps {
    code: number,
    message: string,
    data: any
};

const RegisterPage = () => {

    const navigate = useNavigate();
    const [alert, setAlert] = useState({ show: false, severity: '', title: '', description: '' });

    const initialForm = {
        nombres: '',
        apellidos: '',
        email: '',
        celular: '',
        direccion: '',
        empresa: '',
        user: '',
        password: ''
    }

    const { nombres, apellidos, email, celular, direccion, empresa, user, password, reset, onInputChange }: any = useForm(initialForm);

    // Función para cerrar la alerta
    const handleCloseAlert = () => {
        setAlert(prev => ({ ...prev, show: false }));
    };

    const HandleSubmit = async () => {
        if (!nombres || !apellidos || !email || !celular || !direccion || !empresa || !user || !password) {
            setAlert({ show: true, severity: 'info', title: 'Información', description: 'Los campos no pueden estar vacíos' });
            setTimeout(handleCloseAlert, 2000);
            return;
        }

        try {
            // Define los parámetros que deseas enviar
            const params = { 'name': nombres, 'lastName': apellidos, 'email': email, 'phone': celular, 'address': direccion, 'enterprise': empresa, 'user': user, 'password': password };
            // Realiza la solicitud con la función fetchApiCyberSecure y pasa los parámetros
            const data: ResponseProps = await fetchApiCyberSecure('POST', '/registerUser', params);
            if (data.code === 2) {
                setAlert({ show: false, severity: 'success', title: 'Exitoso', description: 'Se registró satisfactoriamente.' });
                setTimeout(handleCloseAlert, 2000);
                navigate('/login');
                reset(); // Llama a reset para limpiar los campos del formulario
            } else if(data.code === 1) {
                setAlert({ show: true, severity: 'error', title: 'Error', description: 'No se pudo realizar el registro.' });
                setTimeout(handleCloseAlert, 2000);
            }
        } catch (error) {
            console.error('Error al registrarse:', error);
            setAlert({ show: true, severity: 'error', title: 'Error', description: 'Ha ocurrido un error durante el registro de su cuenta.' });
            setTimeout(handleCloseAlert, 2000);
        }
    };
    
    return (
        <div style={{ height: '100vh' }}>
            <Grid container spacing={0} direction='row' justifyContent='center' alignItems='stretch' columns={16} sx={{height: '100vh'}}>
                {alert.show
                    && (
                        <div style={{ position: 'absolute', width: '80%', height: '100%', marginTop: '30px' }}>
                            <AlertComponent severity={alert.severity} title={alert.title} description={alert.description} />
                        </div>
                    )
                }
                <Grid item xs={8} sx={{ backgroundColor: '#A31217' }}>
                    <Avatar
                        alt="logo-signIn"
                        src={assets.images.signIn}
                        sx={{ width: 500, height: 500, display: 'grid', placeItems: 'center', margin: 'auto' }}
                    />
                    <Typography variant='h4' color={"#fff"} style={{ textAlign: 'center' }}>
                        Cybersecure: Su Asesor Legal en Ciberseguridad
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        backgroundColor: '#282828',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}
                >
                    <Box sx={{ width: '80%', borderRadius: '10px', p: 3 }}>
                        <Typography variant='h4' color="#fff" gutterBottom textAlign='center'>
                            Bienvenido a CyberSecure
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                    required
                                    name='nombres'
                                    label="Nombres"
                                    fullWidth
                                    color='error'
                                    variant='filled'
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                                    value={user ?? ''}
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
                            <Grid item xs={12} sx={{ display: 'grid', placeItems: 'center', my: '8px' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color='error'
                                    startIcon={<SaveIcon />}
                                    sx={{
                                        bgcolor: '#A31217', marginTop: '20px', height: '50px', '&:hover': {
                                            bgcolor: '#D32F2F', // por ejemplo, rojo oscuro para el hover
                                        },
                                        '&.Mui-focused': {
                                            bgcolor: '#D32F2F', // el mismo rojo oscuro para el focus
                                        }}}
                                    onClick={HandleSubmit}>
                                    Guardar cambios
                                </Button>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: '20px' }}>
                                    <Typography variant='subtitle1' color="#fff" gutterBottom textAlign='center'>
                                        ¿Ya tienes una cuenta?
                                    </Typography>
                                    <Link to='/login' style={{ textDecorationColor: '#A31217' }}>
                                        <Typography variant='subtitle1' color="#A31217" gutterBottom textAlign='center'>
                                            Iniciar Sesión
                                        </Typography>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default RegisterPage;