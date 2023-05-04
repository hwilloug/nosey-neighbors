import './App.css'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@emotion/react'
import Footer from './components/Footer'
import { CssBaseline } from '@mui/material'
import theme from './theme'

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
