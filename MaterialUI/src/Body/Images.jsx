import { Container, Grid } from '@mui/material'
import React from 'react'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'

const Images = () => {
  return (
    <div>
        <Container>
            <Grid container spacing={2} justifyContent="center">
                <Grid item lg={3} sx={{ margin: "0px 0px 0px 0px" }}>
                    <img width="100%" height="90%"  src={img4}/>

                </Grid>
                <Grid item lg={3}>
                    <img width="100%"height="90%"src={img5}/>

                </Grid>
                <Grid item lg={3}>
                    <img width="140%" height="90%"src={img6}/>

                </Grid>
            </Grid>
        </Container>
        <Container>
            <Grid container spacing={2} justifyContent="center">
                <Grid item lg={3}>
                    <img width="100%" height="90%" src={img7}/>

                </Grid>
                <Grid item lg={3}>
                    <img width="100%" height="90%" src={img8}/>

                </Grid>
                <Grid item lg={3}>
                    <img width="140%" height="90%" src={img9}/>

                </Grid>
            </Grid>
        </Container>
      
    </div>
  )
}

export default Images
