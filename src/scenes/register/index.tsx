import { Box } from "@mui/system"
import { Button, TextField, Typography, useTheme, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, Icon } from "@mui/material"
import { tokens } from "../../theme";
import { useState } from "react"
import { VisibilityOff, Visibility, Google } from "@mui/icons-material";

const RegisterPage = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 104px)', gap: 2 }}>
            <Box mt={4} mx={20}>
                <Box display="flex" p={12} sx={{ width: '60vh', height: "75vh", backgroundColor: colors.primary[800], borderRadius: 10, boxShadow: 2, }}>
                    <Box display="flex" sx={{ flexDirection: 'column', width: "100%", gap: 2 }}>
                        <Typography fontSize="60px" mb={4} textAlign="center"> SingUp</Typography>

                        <TextField label="Email">

                        </TextField>

                        <FormControl fullWidth sx={{}}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <Box display="flex" sx={{ justifyContent: 'center', alignItems: 'center' }} my={2}>
                            <IconButton size="large" ><Google sx={{ width: 30, height: 30 }} /></IconButton>
                        </Box>

                        <Button variant="contained" size="large" fullWidth style={{ fontSize: 20 }}>Register</Button>
                    </Box>
                </Box>
            </Box >
        </Box>

    )
}

export default RegisterPage