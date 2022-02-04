import "./App.css";
import TourCard from "./componentes/TourCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
           <TourCard />
       </Grid>
      </Container>
    </div>
  );
}

export default App;
