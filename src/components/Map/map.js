import React from 'react';
import {
  MapContainer,
  TileLayer,
  Polygon
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from '../../data';
import './Map.css';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



const center = [40.63463151377654, -98.89969605983609];



export default () => {
  return (
    <>
      <Box>
        <Box>
          <Grid sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" >
                <Grid  item width={"100%"}  md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      width:"100%",
                      border: "1px solid grey",
                    }}>
                    <MapContainer center={center} zoom={3} style={{ width: '100%', height: '80vh', border: "1px solid grey" }}>
                      <TileLayer
                        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=yjigEsvFfrQkwt4pdkE1"
                      />

                      {
                        statesData.features.map((state) => {
                          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                          return (<Polygon
                            pathOptions={{
                              fillColor: '#FD8D3C',
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: 'white'
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  dashArray: "",
                                  fillColor: "#BD0026",
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  opacity: 1,
                                  color: "white",
                                })
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: 'white',
                                  fillColor: '#FD8D3C'
                                });
                              },
                              click: (e) => {
                              }
                            }}
                          />)
                        })
                      }
                    </MapContainer>


                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </>
  );
}












