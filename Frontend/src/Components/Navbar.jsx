import { Box, Button, Toolbar } from '@mui/material'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import GmailLogo from './image/gmail.png'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box sx={{ color: "black" }}>
            <AppBar sx={{ bgcolor: '#e8e8e8', color: 'black', height: '50px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box title="Gmail" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '2rem' }} src={GmailLogo} alt="Gmail Logo" />
                    </Box>
                    <Box title="Write Gmail" sx={{ alignSelf: 'center' }}>
                        <Link to={'/'}>
                            <ModeEditOutlineIcon sx={{ cursor: 'pointer' }} >write mail</ModeEditOutlineIcon>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
