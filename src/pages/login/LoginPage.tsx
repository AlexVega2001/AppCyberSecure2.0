import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import assets from '../../assets';
import { useForm } from '../../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { fetchApiCyberSecure } from '../../helpers/fetchData';
import AlertComponent from '../../components/common/AlertComponent';
import { UserContext } from '../../context/UseContext';

interface ResponseProps {
    code: number,
    message: string,
    data: any
};

const LoginPage = () => {

    const navigate = useNavigate();
    const [alert, setAlert] = useState({ show: false, severity: '', title: '', description: '' });

    const initialForm = {
        user: '',
        password: ''
    }

    const { user, password, onInputChange, reset }: any = useForm(initialForm);
    const { setDataUser }: any = useContext(UserContext);

    // Función para cerrar la alerta
    const handleCloseAlert = () => {
        setAlert(prev => ({ ...prev, show: false }));
    };

    const HandleSubmit = async () => {
        if (!user || !password) {
            setAlert({ show: true, severity: 'info', title: 'Información', description: 'Los campos no pueden estar vacíos' });
            setTimeout(handleCloseAlert, 2000);
            return;
        }

        try {
            // Define los parámetros que deseas enviar
            const params = { 'user': user, 'password': password };
            // Realiza la solicitud con la función fetchApiCyberSecure y pasa los parámetros
            const data: ResponseProps = await fetchApiCyberSecure('GET', '/logIn', params);
            if (data.code === 2) {
                localStorage.setItem('token', data.data?.id); // Asume que el token viene en data.data.token
                setDataUser(data.data);
                setAlert({ show: false, severity: 'success', title: 'Exitoso', description: 'Login exitoso' });
                setTimeout(handleCloseAlert, 2000);
                navigate('/');
            } else if(data.code === 1) {
                setAlert({ show: true, severity: 'error', title: 'Error', description: 'Usuario y/o Constraseña Incorrectos.' });
                setTimeout(handleCloseAlert, 2000);
            }
        } catch (error) {
            console.error('Error al loguearse:', error);
            setAlert({ show: true, severity: 'error', title: 'Error', description: 'Ha ocurrido un error durante el inicio de sesión' });
            setTimeout(handleCloseAlert, 2000);
        } finally {
            reset(); // Llama a reset para limpiar los campos del formulario
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
                        <TextField
                            required
                            name="password"
                            label="Contraseña"
                            fullWidth
                            margin="normal"
                            color='error'
                            variant='filled'
                            sx={{ backgroundColor: 'white', borderRadius: 1 }}
                            value={password ?? ''}
                            onChange={onInputChange}
                        />
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="contained" size="large" startIcon={<LoginIcon />} sx={{
                                bgcolor: '#A31217', marginTop: '20px', height: '50px', '&:hover': {
                                    bgcolor: '#D32F2F', // por ejemplo, rojo oscuro para el hover
                                },
                                '&.Mui-focused': {
                                    bgcolor: '#D32F2F', // el mismo rojo oscuro para el focus
                                }
                            }} onClick={HandleSubmit}>Iniciar Sesión</Button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: '20px' }}>
                            <Typography variant='subtitle1' color="#fff" gutterBottom textAlign='center'>
                                ¿No tienes cuenta?
                            </Typography>
                            <Link to='/register' style={{ textDecorationColor: '#A31217' }}>
                                <Typography variant='subtitle1' color="#A31217" gutterBottom textAlign='center'>
                                    Registrate
                                </Typography>
                            </Link>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginPage;