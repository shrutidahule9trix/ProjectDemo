/** @format */

import './Style/index.css';
import './Style/fonts.css';
import router from './Routes/routes';
import { RouterProvider } from 'react-router-dom';
import { useGlobalContext } from './context';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blue, teal } from '@mui/material/colors';
import { THEMES } from './Constants/commons';

function App() {
  const { activeTheme } = useGlobalContext();
  const light = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: blue[500],
        dark: blue[600],
        light: blue[400],
      },
      secondary: {
        main: teal[400],
      },
      background: {
        paper: '#F3F8FF',
      },
    },
    typography: {
      fontFamily: 'Inter',
    },
  });

  const dark = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Inter',
    },
  });
  return (
    <div>
      <ThemeProvider theme={activeTheme === THEMES.DARK ? dark : light}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
