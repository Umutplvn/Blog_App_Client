import React from "react";
import AuthForm from "../components/AuthForm";
import { Box, Typography } from "@mui/material";


const Login = () => {

  return (
    <>
    <AuthForm/>
    <Box sx={{position:"fixed", bottom:"0", backgroundColor:"red", border:"5px", borderRadius:"1rem", padding:"0.5rem"}}>
    <Typography sx={{fontSize:"12px", color:"white"}}>Username: panel</Typography>
    <Typography  sx={{fontSize:"12px",  color:"white"}}>Email: panel@gmail.com</Typography>
    <Typography  sx={{fontSize:"12px",  color:"white"}}>Password: 1a2b3c4D.</Typography>
    </Box>
    </>
  );
};

export default Login
