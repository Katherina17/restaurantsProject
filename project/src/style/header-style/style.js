import { createTheme } from "@mui/material/styles";

const colors = {
    secondary: '#1c1c1c',
};

const theme = createTheme({
    palette: {
        secondary: {
            main: colors.secondary
        }
    }
});

export default theme;