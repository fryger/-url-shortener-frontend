import { Box } from "@mui/system"
import { TextField, Typography, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from "../../theme";
import "./index.css"

const Landing = () => {
    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 64px)', flexDirection: 'column' }} >
            <Box display="flex">
                <Typography fontSize={"2.5vw"} className="full_url" />
            </Box>
            <Box display="flex" mt={10}>
                <Typography fontSize={"5vw"} mx={"2%"} color={colors.primary[700]}>
                    fryger.pl
                </Typography>
                <Typography fontSize={"5vw"} mx={"2%"} color={colors.primary[700]}>
                    /
                </Typography>
                <Typography fontSize={"5vw"} className="short_url" />
            </Box>
        </Box >

    )
}

export default Landing