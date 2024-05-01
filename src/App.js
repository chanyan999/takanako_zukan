import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Button from "@mui/material/Button";

const theme = createTheme({
  // You can customize your theme here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
