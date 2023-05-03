import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <NavBar />
          <LandingPage />
        </ParallaxProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
