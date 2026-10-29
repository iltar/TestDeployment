import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CarList from "./components/CarList";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{mb: 2}}>
        <Toolbar>
          <Typography variant="h6">Car Stock</Typography>
        </Toolbar>
      </AppBar>
      <CarList />
      <CssBaseline />
    </Container>
  );
}

export default App;
