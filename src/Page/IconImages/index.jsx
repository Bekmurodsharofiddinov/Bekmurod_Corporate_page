import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Img from '../../Assets/image/img.webp'
import Img2 from '../../Assets/image/img2.webp'
import Img3 from '../../Assets/image/img3.webp'
import Img4 from '../../Assets/image/img4.webp'
import Img5 from '../../Assets/image/img5.webp'

const data = [
    {
        img: Img,

    },
    {
        img: Img2,


    },
    {
        img: Img3,
    },
    {
        img: Img4,
    },
    {
        img: Img5,
    },
];

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%', display: "flex", justifyContent: "center" , my:"70px"}}>
            <Container>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ textAllign: "center" }}>
                    {data.map((item) => {
                        return (
                            <Grid item xs={12} sm={3} md={2} sx={{ml:"3%"}} >
                                <Box>
                                    <img style={{width:"100%"}} src={item.img} alt="" />
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    );
}
