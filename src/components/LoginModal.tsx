import { Box } from "@mui/system"
import { tokens } from "../theme";
import { Typography, useTheme, TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const LoginModal = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box display={'flex'}>
                <Typography variant="h3" fontWeight={'medium'} >LogIn</Typography>
            </Box>
            <Box display={'flex'}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

            </Box>
            <Box display={'flex'}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box display={'flex'}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 4, mt: 2 }}
                >
                    Sign In
                </Button>
            </Box>
            <Box display={'flex'}>
                <Button size="small">
                    <Typography onClick={() => navigate('/')} variant="body2" color={colors.gray[600]} >
                        Forgot password?
                    </Typography>
                </Button>
            </Box>
            <Box display={'flex'}>
                <Button size="small">
                    <Typography onClick={() => navigate('/register')} variant="body2" color={colors.gray[600]} >
                        {"Don't have an account? Sign Up"}
                    </Typography>
                </Button>
            </Box>

        </Box>

    )
}

export default LoginModal