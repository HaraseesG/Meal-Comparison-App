import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import TwoColumnPage from './pages/TwoColumnPage';
import AccordionPage from './pages/AccordionPage';

const theme = createTheme({
  // You can customize the theme here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TwoColumnPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
