import logo from './logo.svg';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';


function Headercontent(){
    return(
        <Container>
        <Box>
        <img src={logo} className="App-logo" alt="logo" />
        </Box>
        <Box>
            <Select id="logoutid">
            <MenuItem value="{logout}">Logout</MenuItem>
            </Select>
        </Box>
        </Container>
    )
}
export default Headercontent;