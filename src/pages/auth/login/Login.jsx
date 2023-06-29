import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/api/login', {
            username: username,
            password: password
        }).then(response => {
            if (response.data.message) {
                toast.error(response.data.message)
            }
            else {
                localStorage.setItem('userToken', response.data.token)
                navigate('/chats')

            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="main-div">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className="box"
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box className="form" component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            className="field"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Sign In
                        </Button>
                        <Grid container>

                            <Grid item xl>
                                <Link to="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>

    );
};

export default Login;
