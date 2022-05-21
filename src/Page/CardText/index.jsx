import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, CardActionArea, CardActions, Box, Container } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';

const data = [
    {
        img: <RocketLaunchOutlinedIcon style={{ fontSize: "40px", color: "grey" }} />,
        text: "User friendly Admin",
        text2: "inappropriate behavior is often laughed off as boys will be boys, women face higher conduct."

    },
    {
        img: <AutoFixHighOutlinedIcon style={{ fontSize: "40px", color: "grey" }} />,
        text: "Full Responsive",
        text2: "inappropriate behavior is often laughed off as boys will be boys, women face higher conduct."


    },
    {
        img: <CardGiftcardOutlinedIcon style={{ fontSize: "40px", color: "grey" }} />,
        text: "Full Documentation",
        text2: "inappropriate behavior is often laughed off as boys will be boys, women face higher conduct."


    },
    {
        img: <PhoneCallbackOutlinedIcon style={{ fontSize: "40px", color: "grey" }} />,
        text: "Resonable Pricing",
        text2: "inappropriate behavior is often laughed off as boys will be boys, women face higher conduct."


    },
];


export default function MultiActionAreaCard() {
    return (
        <>
            <Box sx={{ textAlign: "center", my: "80px" }}>
                <Typography variant="h4" sx={{ fontWeight: "600" }}>
                    What we can offer for you
                </Typography>
                <Typography variant="h7" sx={{}}>
                    Who are in extremely love with eco friendly system..
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mb: "80px" }}>
                <Box sx={{ width: "80%" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {data.map((item) => {
                            return (
                                <Grid xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center", }}>
                                    <Box>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography sx={{}}>
                                                    {item.img}
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" sx={{ mt: "20px", fontWeight: "600" }}>
                                                    {item.text}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.text2}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button  sx={{ borderRadius: "50px", p:"5px 20px 5px 20px",background: "none", border: "1px solid #C4C4C4", color: "black", ":hover": { color: 'white', border: "1px solid white", background: 'none' }  }}>view details</Button>
                                        </CardActions>
                                    </Box>

                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
