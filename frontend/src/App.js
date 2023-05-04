import './App.css';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Footer from './components/Footer';
import MetalMania from './assets/MetalMania-Regular.ttf'
import Rajdhani from './assets/Rajdhani-Regular.ttf'
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
  typography: {
    fontFamily: 'Rajdhani, Arial',
    button: {
      fontFamily: 'MetalMania, Arial'
    },
    h1: {
      fontFamily: 'MetalMania, Arial'
    },
    h2: {
      fontFamily: 'MetalMania, Arial'
    },
    h3: {
      fontFamily: 'MetalMania, Arial'
    },
    h4: {
      fontFamily: 'MetalMania, Arial'
    },
    h5: {
      fontFamily: 'MetalMania, Arial'
    },
    h6: {
      fontFamily: 'MetalMania, Arial'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'MetalMania';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('MetalMania'), local('MetalMania-Regular'), url(${MetalMania}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Rajdhani';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Rajdhani'), local('Rajdhani-Regular'), url(${Rajdhani}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <LandingPage />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
