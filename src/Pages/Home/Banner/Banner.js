import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography,Container } from '@mui/material';

const BannerBg={
    background:`url(${bg})`,
    height:450
}

const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:400
} 

const Banner = () => {
    return (
        <Container style={BannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter,textAlign:'left'}} xs={12} md={6}>
         <Box>
         <Typography variant="h3">
            Your New Smile <br/>
            Stars Hre
         </Typography>
         <Typography variant="h6" sx={{my:3,fontSize:13, fontWeight:300, color:'gray' }}>
         Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.
         </Typography>
         <Button  variant='contained' style={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button>
         </Box>
          </Grid>
          <Grid item xs={12} md={6}  style={verticalCenter}>
           <img style={{width:'400px'}} src={chair} alt="" />
          </Grid>
         
        </Grid>
      </Container>
    );
};

export default Banner;