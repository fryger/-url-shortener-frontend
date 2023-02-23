import { Box, Icon, IconButton, useTheme, Typography, Popover } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import { LightModeOutlined, DarkModeOutlined, AccountCircleOutlined } from "@mui/icons-material";
import Logo from "../../assets/logo.png"
import LoginModal from "../../components/LoginModal";

import { createContext } from "react";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const iconStyles = {
        fontSize: '40px',
    };


    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <Box height={"64px"} display="flex" justifyContent="space-between" p={2}>
            <Typography fontSize={"34px"} fontWeight={900} color={colors.gray[100]}>Project URL</Typography>
            <Box display="flex" >
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    sx={
                        {
                            height: "40px",
                            width: "40px",
                            marginRight: 2
                        }
                    }>
                    {theme.palette.mode === "dark" ? (<DarkModeOutlined style={iconStyles} />) : (<LightModeOutlined style={iconStyles} />)}
                </IconButton>
                <IconButton
                    sx={
                        {
                            height: "40px",
                            width: "40px"
                        }}

                    onClick={handleClick}
                ><AccountCircleOutlined style={iconStyles} /></IconButton>
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}> <LoginModal onChange={handleClose} /></Typography>
            </Popover>



        </Box>
    )
}

export default Topbar