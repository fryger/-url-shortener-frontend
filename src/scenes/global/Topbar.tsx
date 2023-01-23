import { Box, Icon, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import { LightModeOutlined, DarkModeOutlined, AccountCircleOutlined } from "@mui/icons-material";
import Logo from "../../assets/logo.png"

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const iconStyles = {

        fontSize: '40px',
    };


    return (
        <Box height={"64px"} display="flex" justifyContent="space-between" p={2}>
            <Typography fontSize={"30px"}>Project URL</Typography>
            {/* <Box
                component="img"
                sx={{
                    height: 54,
                }}
                alt="Company logo."
                src={Logo}
            /> */}

            <Box display="flex" >
                <IconButton onClick={colorMode.toggleColorMode} size="large" sx={{ height: "40px", width: "40px", marginRight: 2 }}>
                    {theme.palette.mode === "dark" ? (<DarkModeOutlined style={iconStyles} />) : (<LightModeOutlined style={iconStyles} />)}
                </IconButton>
                <IconButton size="large" sx={{ height: "40px", width: "40px" }} ><AccountCircleOutlined style={iconStyles} /></IconButton>
            </Box>
        </Box>
    )
}

export default Topbar