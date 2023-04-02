import { createTheme} from '@mui/material/styles';

export const MuiTheme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    }
  });