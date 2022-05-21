import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "../../Assets/image/bag.jpg"


export default () => {
    return (
        <>
            <Box>
                <Box>
                    <SwiperSlide>
                        <Box sx={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundImage: `url(${Image})`, backgroundSize:"cover"}}>
                            <Box sx={{  }}>
                                <Typography sx={{ color: "white" }}>
                                    <Typography variant='h5' >DISCOVER THE COLORFUL WORLD</Typography>
                                    <Typography variant='h2' sx={{ fontWeight: "600" }}>BUILD YOUR DREAM</Typography>
                                    <Typography variant='h8' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp <br /> or incididunt ut labore et dolore magna aliqua. Ut enim ad minim..</Typography>
                                </Typography>
                                <br />
                                <Button sx={{ width: "25%", py: "1%", background: "blue", borderRadius: "50px", color: "white", ":hover": { color: 'white', border: "1px solid white", background: 'none' } }}>Discover Now</Button>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Box>
            </Box>
        </>
    )
}









