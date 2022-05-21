import * as React from 'react';
import { Box, Grid, Card, Typography, Container } from '@mui/material';
import Image from '../../Assets/image/5-3.jpg'
import Image2 from '../../Assets/image/5-2.jpg'
import Image3 from '../../Assets/image/brandBanner.jpg'

import Img from "../../Assets/image/girl.webp"



const data = [
    {
        image: Image,
    },
    {
        image: Image2,
    },
    {
        image: Image3,
    },

];



export default function MultiActionAreaCard() {
    return (
        <Box sx={{ flexGrow: 1, my: "30px" }}>
            <Container>
                <Box sx={{ textAlign: "center", my: "40px", }}>
                    <Typography variant="h4" sx={{ fontWeight: "600" }}>
                        Our Recent Works may impress you
                    </Typography>
                    <br />
                    <Typography variant="h7">
                        Who are in extremely love with eco friendly system.
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((item) => {
                        return (
                            <Grid item xs={12} sm={4} md={4} key={item}>
                                <Card sx={{ width: "100%", height: "500px", backgroundImage: `url(${item.image})`, backgroundSize: "cover", color: "white", ":hover": { color: "#4B2CC5" } }}>
                                    <Box sx={{ m: "20px" }}>
                                        <Typography variant="h6" sx={{ fontWeight: "600", mt: "80%" }}>
                                            Portable latest Fashion for <br /> young women
                                        </Typography>
                                        <br />

                                        <Typography variant="h7" sx={{ color: "#798D9E", }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                        </Typography>
                                        <Box sx={{ display: "flex", color: "#798D9E", mt: "30px" }}>
                                            <Typography>
                                                <img src={Img} alt="" />
                                            </Typography>
                                            <Typography variant="h8" sx={{ ml: "10px", }}>
                                                Nettie Mullins
                                                <br />
                                                13th Dec
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>

    );
}
