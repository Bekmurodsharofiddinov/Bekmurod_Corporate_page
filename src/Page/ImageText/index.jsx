import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import image from '../../Assets/image/basic.webp'
import image2 from '../../Assets/image/basic2.webp'

export default function MediaControlCard() {
    const theme = useTheme();

    return (
        <Card sx={{ background: "black", my: "30px" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sm={12}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={8} sm={12}>
                            <Box sx={{ my: "20px", }}>
                                <img style={{ width: "100%" }} src={image} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} sm={12}>
                            <Box sx={{ width: "100%" }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: "600", color: "#6D31FD" }}>
                                            Basic Revolutions
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "white" }}>
                                            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={8} sm={12}>
                            <Box sx={{ my: "20px" }}>
                                <img style={{ width: "100%" }} src={image2} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} sm={12}>
                            <Box sx={{ width: "100%" }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: "600", color: "#6D31FD" }}>
                                            Basic Revolutions
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "white" }}>
                                            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Card >
    );
}
