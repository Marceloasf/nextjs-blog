import { PaletteMode, ThemeOptions } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Configurações de Tema da aplicação
export const getThemeOptions = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    background: {
      default: mode === 'light' ? '#fff' : '#303030',
      paper: mode === 'light' ? '#fff' : '#303030'
    },
    primary: {
      main: '#00b0ff',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffce4c'
    }
  }
});
