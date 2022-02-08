import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";





const Cards = () => {
  const [startpoint, setStartpoint] = useState("");
  const [midpoint, setMidpoint] = useState([]); //container of incoming arrays
  const [finale, setFinale] = useState("");
  const [loading ,setLoading]= useState(false); 

  const FetchME = () => {
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${startpoint}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "7f89bf16ebmsh9dff0f23f963d34p190691jsn264543e18108",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMidpoint(data.d);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    FetchME();
    setLoading(false)
  }, [finale]);

  const onchangeHandler = (e) => {
    setStartpoint(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFinale(startpoint);
    setLoading(true)

  };

  return (
      <div className="containerALL">
        <div className="containerForm">
        <form onSubmit={onSubmitHandler}>
          <input type="text" value={startpoint} onChange={onchangeHandler} />
          <button type="submit">Submit</button>
        </form>
          </div>
        <div className="containerCARDS">
            {loading ? <p style={{color: "black"}}> Loading...... </p> : 
            
            <Grid container spacing={3}>
            {midpoint.map((item) => {
              return (
                <Grid item xs={12} sm={4} key={item.id}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#fafafa",
                    }}
                  >
                      <CardMedia image={item.i.imageUrl} sx={{height: 300}}/>
                    <CardContent>
                      <Typography variant="h5">{item.l}</Typography>
                      <Typography variant="body2">Cast: {item.s}</Typography>
                      <Typography variant="body2">Year: {item.y}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid> }
         
        </div>
    </div>
  );
};

export default Cards;
