import { CssBaseline, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import getPlacesData from "./api";
import { useState, useEffect } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)


//opens the map where the person currently is:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);


  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData().then((data) => {
      // console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map  coordinates={coordinates} setBounds={setBounds} setCoordinates={setCoordinates}  />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
