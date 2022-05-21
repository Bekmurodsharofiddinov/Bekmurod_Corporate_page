import { Box, Container, Grid, Typography, Card } from "@mui/material";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Counter from "../../components/Counter";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  const data = {
    image: [
      {
        text: "Happy Clients",
      },
      {
        text: "Total Projects",
      },
    ],
    image1: [
      {
        text: "Cups Coffee",
      },
      {
        text: "Tickets Submitted",
      },
    ],
  };

  return (
    <>
      <Box sx={{backgroundColor:"#6F30FD"}}>
        <Container>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color:"white",
              my:"10%"
            }}
          >
            <Grid container sx={{ my:"10%", display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={2} sm={12} sx={{ m: "15px" }}>
                <Box sx={{ textAlign: 'center', width: '100%', height: '120%' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>
                    <Counter number={2536} title="Posts" />
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    Projects completed
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2} sm={12} sx={{ m: "15px" }}>
                <Box sx={{ textAlign: 'center', width: '100%', height: '120%' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>
                    <Counter number={6784} title="Posts" />
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    Really Happy Clients
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2} sm={12} sx={{ m: "15px" }}>
                <Box sx={{ textAlign: 'center', width: '100%', height: '120%' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>
                    <Counter number={1059} title="Posts" />
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    Total Tasks Completed
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2} sm={12} sx={{ m: "15px" }}>
                <Box sx={{ textAlign: 'center', width: '100%', height: '120%' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>
                    <Counter number={2239} title="Posts" />
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    Cups of coffee taken
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2} sm={12} sx={{ m: "15px" }}>
                <Box sx={{ textAlign: 'center', width: '100%', height: '120%' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>
                    <Counter number={434} title="Posts" />
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    In House Professionals
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};