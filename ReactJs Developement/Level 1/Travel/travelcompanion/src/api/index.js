import axios, { Axios } from "axios";
import React from "react";




const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";



export default async function getPlacesData(sw ,ne) {
    try {
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": "7f89bf16ebmsh9dff0f23f963d34p190691jsn264543e18108",
          },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

