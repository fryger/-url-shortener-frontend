import { Box } from "@mui/system"
import { tokens } from "../theme";
import { Typography, useTheme, TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

import AuthService from "../services/auth.service";


const LoginModal = (props: any) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    interface UserObject {
        email: string;
        password: string;
    }

    const [formInput, setFormInput] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            email: "",
            password: ""
        }
    );

    const handleInput = (event: any) => {
        const name: string = event.target.name;
        const newValue: string = event.target.value;
        setFormInput({ [name]: newValue });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        let data = { formInput };

        AuthService.login(data.formInput.email, data.formInput.password).then(
            (data) => {
                props.onChange()
                // navigate('/register')
            }
        )

        // fetch("https://pointy-gauge.glitch.me/api/form", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(response => response.json())
        //     .then(response => console.log("Success:", JSON.stringify(response)))
        //     .catch(error => console.error("Error:", error));
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box display={'flex'}>
                <Typography variant="h3" fontWeight={'medium'} >LogIn</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
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
                        defaultValue={formInput.email}
                        onChange={handleInput}
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
                        defaultValue={formInput.password}
                        onChange={handleInput}
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
            </form>
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