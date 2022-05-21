import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import CssIcon from '@mui/icons-material/Css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%', backgroundColor: "#222222", mt: "50px" }}>
            <Container>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={3} sm={6} sx={{}}>
                        <Box sx={{ width: "100%", my: "40px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "600", color: "white" }}>
                                About Us
                            </Typography>
                            <br />
                            <Typography variant="h7" sx={{ color: "#777777", }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6} sx={{}}>
                        <Box sx={{ width: "100%", my: "40px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "600", color: "white" }}>
                                Contact Us
                            </Typography>
                            <br />
                            <Typography variant="h7" sx={{ color: "#777777", }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                            </Typography>
                            <Typography variant="h5" sx={{ color: "#5B2FE8", my: "15px", fontWeight: "600" }}>
                                012-6532-568-9746
                                <br />
                                012-6532-569-9748
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} sm={6} sx={{}}>
                        <Box sx={{ width: "100%", my: "40px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "600", color: "white" }}>
                                Newsteller
                            </Typography>
                            <br />
                            <Typography variant="h7" sx={{ color: "#777777", }}>
                                You can trust us. we only send offers, not a single spam.
                            </Typography>
                            <Typography sx={{ display: "flex", my: "20px" }}>
                                <OutlinedInput placeholder="Email address" sx={{ width: '100%', height: '40px', margin: '3px 0px 5px 0px', color: "black", background: "white", borderRadius: "50px" }} />
                                <Button variant="outlined" sx={{ borderRadius: "50px", width: '20%', height: '40px', margin: '3px 20px 5px 0px', fontSize: "11px", ':hover': { pr: "10px", background: '#5B2FE8', color: 'white', }, background: '#5B2FE8', color: 'white', border: 'none' }}> <ArrowForwardIcon style={{ marginLeft: "4px" }} /></Button>
                            </Typography>
                            <Typography variant="h7" sx={{ color: "#777777", }}>
                                Submitting...
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} sx={{}}>
                        <Box sx={{ width: "100%", my: "40px" }}>
                            <br />
                            <Typography variant="h7" sx={{ color: "#777777", }}>
                                Copyright ©2022 All rights reserved | This template is made with  by Colorlib
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sm={6} sx={{}}>
                        <Box sx={{ width: "100%", my: "40px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "600", color: "white" , float:"right"}}>
                                <FacebookIcon  style={{background:"black", margin:"5px", padding:"10px", width:"10%", height:"30"}} />
                                <TwitterIcon style={{background:"black", margin:"5px", padding:"10px", width:"10%", height:"30"}}  />
                                <LanguageIcon style={{background:"black", margin:"5px",padding:"10px", width:"10%", height:"30"}} />
                                <CssIcon style={{background:"black", margin:"5px", padding:"10px", width:"10%", height:"30"}} />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
