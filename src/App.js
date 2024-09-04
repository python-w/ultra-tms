import "./App.css";
import "./custom.scss";
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Box } from '@mui/material';
import CustomTheme from './CustomTheme';
import UTRouter from './components/Routes';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <Container sx={{ [CustomTheme.breakpoints.up("xs")]: { maxWidth: '100%', overflow: 'hidden' } }}>
        <Box className="dashboard_view" sx={{ display: "flex" }}>
          <RouterProvider router={UTRouter} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
