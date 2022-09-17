import React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";



function Header() {
    return (
        <div >
            <AppBar position="static" minHeight="100px">
                <Typography align="center" variant="h2"
                    component="div" sx={{ flexGrow: 1 }}>
                    The Quiz Web Application!
                </Typography>
            </AppBar>
        </div>
    )
};

export default Header;