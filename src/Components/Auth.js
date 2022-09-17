import React from 'react'
import Header from './Header'
import Signin from './Signin'
import Signup from './Signup'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPlayer from 'react-player';
import Sidebar from './Dashboard/Sidebar';

function Auth() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <Header /><br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>Instructions to play quiz game</Item>
                    </Grid>
                    <Grid container xs={6} md={8} justifyContent="center" alignItems="center">
                        <ReactPlayer url='https://www.youtube.com/watch?v=effkoBQqm7g&ab_channel=FILM.UAGroup' />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <BrowserRouter>
                                <Routes>
                                    <Route exact path="/" element={< Signin />} />
                                    <Route path="signup" element={< Signup />} />
                                    <Route exact path="deshboard" element={<Sidebar />} />
                                </Routes>
                            </BrowserRouter>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Auth;