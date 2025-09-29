// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/HomePage'; 
import Header from './components/layout/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
