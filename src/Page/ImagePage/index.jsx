import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '../../Assets/image/1.jpg'
import image2 from '../../Assets/image/2.jpg'
import image3 from '../../Assets/image/3.jpg'
import image4 from '../../Assets/image/4.jpg'
import image5 from '../../Assets/image/5.jpg'
import image6 from '../../Assets/image/6.jpg'






export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{textAlign:"center", my:"40px"}}>
                        <Typography variant="h4" sx={{fontWeight:"600"}}>
                            Our Recent Works may impress you
                        </Typography>
                        <br />
                        <Typography variant="h7">
                            Who are in extremely love with eco friendly system.
                        </Typography>
                    </Box>
                    <Grid item xs={12} md={8} sm={12} sx={{}}>
                        <Box>
                            <img style={{width:"100%"}} src={image} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sm={12} sx={{}}>
                        <Box>
                            <img style={{width:"100%"}} src={image2} alt="" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} sm={12} sx={{}}>
                        <Box>
                            <img style={{width:"100%"}} src={image3} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} sm={12} sx={{}}>
                        <Box>
                            <img style={{width:"100%"}} src={image4} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} sx={{}}>
                        <Box>
                            <img style={{width:"100%"}} src={image5} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} sx={{}}>
                        <Box>
                            <img style={{width:"100%"}} src={image6} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
