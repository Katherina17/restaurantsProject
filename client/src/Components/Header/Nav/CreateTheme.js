import { createTheme } from "@mui/material/styles";

const colors = {
    secondary: '#1c1c1c',
    primary: 'rgba(228, 170, 30, 0.92)'
};

const theme = createTheme({
    palette: {
        secondary: {
            main: colors.secondary
        },
        primary: {
            main: colors.primary
        }
    }
});

export default theme;