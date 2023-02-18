import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


export const tokens = (mode: any) => ({
    ...(mode === "dark" ? {
        gray: {
            100: "#f4f4f4",
            200: "#e8e8e8",
            300: "#dddddd",
            400: "#d1d1d1",
            500: "#c6c6c6",
            600: "#9e9e9e",
            700: "#777777",
            800: "#4f4f4f",
            900: "#282828"
        },
        primary: {
            100: "#dddbdd",
            200: "#bbb8bb",
            300: "#99949a",
            400: "#777178",
            500: "#554d56",
            600: "#443e45",
            700: "#332e34",
            800: "#221f22",
            900: "#110f11"
        },

    }
        : {
            gray: {
                100: "#f4f4f4",
                200: "#e8e8e8",
                300: "#dddddd",
                400: "#d1d1d1",
                500: "#c6c6c6",
                600: "#9e9e9e",
                700: "#777777",
                800: "#4f4f4f",
                900: "#282828"
            },
            primary: {
                900: "#f0f7f3",
                800: "#e1eee8",
                700: "#d3e6dc",
                600: "#c4ddd1",
                500: "#b5d5c5",
                400: "#91aa9e",
                300: "#6d8076",
                200: "#48554f",
                100: "#242b27"
            }
        })
})



export const themeSettings = (mode: any) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.primary[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100]
                    },
                    background: {
                        default: colors.primary[900]
                    }, text: {
                        primary: colors.gray[300]
                    }
                } : {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.primary[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100]
                    },
                    background: {
                        default: colors.primary[500]
                    },
                    text: {
                        primary: colors.gray[900]
                    }
                }
            )
        },
        typography:
        {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
}


export const ColorModeContext = createContext({ toggleColorMode: () => { } })

export const useMode = () => {
    const [mode, setMode] = useState("light")

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode] as const;
}


