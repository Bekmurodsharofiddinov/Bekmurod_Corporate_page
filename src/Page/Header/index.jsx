import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import img from '../../Assets/image/yellow.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function ActionAreaCard() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box>
                        <img style={{ width: "100%" }} src={img} alt="" />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ width: "65%" }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={12} sm={12}>
                                <Box sx={{}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: "600", color: "#6D31FD" }}>
                                                We Believe that <br /> Interior <br /> beautifies total

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} sm={6}>
                                <Box sx={{}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "600" }}>
                                                Expert Services
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Usage of the Internet is becoming more common due to rapid advancement of technology.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} sm={6}>
                                <Box sx={{}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "600" }}>
                                                Great Support
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Usage of the Internet is becoming more common due to rapid advancement of technology.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
}
