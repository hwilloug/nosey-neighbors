import './App.css'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@emotion/react'
import Footer from './components/Footer'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<LandingPage />}></Route>
          </Routes>
          <Footer />
        
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
