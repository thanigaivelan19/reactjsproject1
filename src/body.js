import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
//import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Bodycontent() {

    
        
       const [uname,setuname]=useState('');
       const [age,setage]=useState('');

       const Callprint = () => {
        const frmdetails = {
            'Name' : uname,
            'Age' : age,
            
        }
        console.log(frmdetails);
    }

           // document.write("NAME :"+uname.value);
            //document.write("AGE :"+age.value);
       
  return (
    <Container>
      <FormControl variant="standard" sx={{ m: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
        <Grid sx={{ m: 2 }} item md={6}><TextField id="unametxt" name="unametxt" onChange={e => setuname(e.target.value)} label="Name" variant="outlined" />
        </Grid>
        <Grid sx={{ m: 2 }} item md={6}><TextField id="agetxt" name="agetxt" onChange={e=> setage(e.target.value)} label="Age" variant="outlined" />
        </Grid>
        <Grid item md={6}><Button variant="contained" name="subbtn" id="subbtn" onClick={Callprint}>Submit</Button></Grid>
        </Typography>
       </FormControl>
        <Copyright />
      <Box sx={{ my: 4 }}>
        <Grid><InputLabel>Name Given {uname}</InputLabel></Grid>
        <Grid><InputLabel>Age Given {age}</InputLabel></Grid>
      </Box>
    </Container>
  );
}
export default Bodycontent;