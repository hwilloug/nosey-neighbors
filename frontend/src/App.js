import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Footer from './components/Footer';

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
          <Footer />
        </ParallaxProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
