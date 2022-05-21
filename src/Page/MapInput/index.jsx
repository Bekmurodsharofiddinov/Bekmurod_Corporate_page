import React from 'react'
import { Box } from '@mui/system'
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import './package-lock.json'
import Container from '@mui/material/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function index() {


    return (
        <Box
            sx={{}}>
            <Container sx={{ width: "90%" }}>
                <Grid container xs={12} sx={{ background: 'white', borderRadius: '5px', height: "100%" }}>
                    <Grid item xs={12} sm={12} md={6} sx={{}}>
                        <div><iframe style={{width:"100%", height:"80vh"}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=340&amp;height=545&amp;hl=en&amp;q=crown%20heights+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">gps smartwatches</a></iframe></div>
                    </Grid>
                    <Grid item spacing={2} xs={12} sm={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                        <Typography variant='h4' sx={{ fontWeight: "600" }}>You can drop us a line</Typography>
                        <Typography variant='h7' sx={{}}>Who are in extremely love with eco friendly system</Typography>

                        <Box sx={{ textAlign: "right" }}>
                            <Typography sx={{}}>
                                <OutlinedInput placeholder="First Name" sx={{ width: '100%', height: '50px', margin: '15px 20px 5px 0px' }} />
                                <OutlinedInput placeholder="Last Name" sx={{ width: '100%', height: '50px', margin: '15px 0px 5px 0px' }} />
                            </Typography>
                            <OutlinedInput placeholder="First Name" sx={{ width: '100%', height: '50px', margin: '15px 20px 5px 0px' }} />
                            {/* <OutlinedInput placeholder="Last Name" sx={{ width: '100%', height: '50px', margin: '15px 0px 5px 0px' }} /> */}
                            <textarea style={{ maxWidth: "100%", border: "1px solid #C4C4C4", borderRadius: "2px", width: "90%", height: "100px", padding: "20px", margin: "15px 20px 5px 0px" }} placeholder='Message' />
                            <Box sx={{}}>
                                <Button variant="outlined" sx={{ borderRadius: "50px", width: '40%', height: '45px', margin: '3px 0px 5px 0px', fontSize: "11px", ':hover': { pr: "10px", background: '#4E73DF', color: 'white', }, background: '#4E73DF', color: 'white', border: 'none' }}>Send Message <ArrowForwardIcon style={{ marginLeft: "4px" }} /></Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}