import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { getThemeOptions } from '../styles/MuiThemeOptions';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme(getThemeOptions(darkMode ? 'dark' : 'light'));

  const getLayout = Component.getLayout || (page => page);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
