//This comp will have the google map ,rating icons for placedetail traversal , material ui,
//usemediaquery for mobile responsiveness

import React from "react";

import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import useStyles from "./style";

function Map({coordinates, setCoordinates ,setBounds}) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key : 'AIzaSyAyqboyr4WskBZjCcvBFY8VkqCAmW2CPe0'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
