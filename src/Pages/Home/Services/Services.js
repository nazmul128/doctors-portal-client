import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services=[
  {
    name:'Fluoride Treatment',
    description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person’s teeth to improve health.',
    img:fluoride
  },
  {
    name:'Cavity Filling',
    description:'This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.Symptoms typically happen when a cavity is more developed.',
    img:Cavity
  },
  {
    name:'Teeth Whitening',
    description:'Teeth whitening is a form of dentistry and should only be carried out by a dentist or another regulated dental professional, such as a dental hygienist or dental therapist, on the prescription of a dentist.',
    img:whitening
  }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{fontWeight:400,m:2,color: 'info.main'}} variant="h6" component="div">
         OUE SERVICES
        </Typography>
      <Typography sx={{fontWeight:500}} variant="h4" component="div">
        Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          services.map(service=><Service
          key={service.name}
          service={service}
          ></Service>)
        }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;