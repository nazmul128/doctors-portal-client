import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button } from '@mui/material';

const appointmentBg={
    background:`url(${bg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <img
          style={{width:400, marginTop:'-110px'}}
          src={doctor} alt='' />
          </Grid>
          <Grid item xs={12} md={6} sx={{ 
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign:'left', 
              }}>
         <Box>
         <Typography variant="h6" sx={{mb:2}} style={{color:'#5CE7ED'}} component="div">
                APPOINTMENT
        </Typography>
          <Typography variant="h3"  style={{color:'white', marginBottom:'10px'}} component="div">
               Make an Appointment Today
        </Typography>
          <Typography variant="p" sx={{my:2}} style={{color:'white', fontSize:'14', fontWeight:'500'}} component="div">
             It is a Long established fact that a reader will be distracted by the readable content of a page when looking at its 
        </Typography>
        <Button variant='contained' style={{backgroundColor:'#5CE7ED'}} >Learn More</Button>
         </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;