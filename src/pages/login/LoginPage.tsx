import { Avatar, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import assets from '../../assets';
import { useForm } from '../../hooks/useForm';

type Props = {};

const LoginPage = (props: Props) => {

    const initialForm = {
        user: '',
        passwprd: ''
    }

    const { user, password, onInputChange }: any = useForm(initialForm);

    const HandleSubmit = () => {
        console.log('Data del Formulario: ' + user);
    }

    return (
        <div>
            <Grid container direction='row' justifyContent='center' alignItems='stretch' columns={16} sx={{height: '100vh'}}>
                <Grid item xs={8} sx={{backgroundColor: '#A31217'}}>
                    <Avatar
                        alt="logo-signIn"
                        src={assets.images.signIn}
                        sx={{ width: 500, height: 500, display: 'grid', placeItems: 'center', margin: 'auto' }}
                    />
                    <Typography variant='h4' color={"#fff"} style={{ textAlign: 'center' }}>
                        Cybersecure: Su Asesor Legal en Ciberseguridad
                    </Typography>
                </Grid>
                <Grid item xs={8} sx={{backgroundColor: '#282828'}}>
                    <Grid justifyContent='center' alignItems='center' border='2px solid black' height='100vh'>
                        <Typography variant='h4' color={"#fff"} my='20px' textAlign='center'>
                            Bienvenido a CyberSecure
                        </Typography>
                        <Grid container rowSpacing={4} width='80%' margin='auto' alignItems='center'>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    name='user'
                                    label="Usuario"
                                    fullWidth
                                    color='error'
                                    variant='filled'
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                                    value={user}
                                    onChange={onInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="password"
                                    label="Contraseña"
                                    fullWidth
                                    color='error'
                                    variant='filled'
                                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginPage;