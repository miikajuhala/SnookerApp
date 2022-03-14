
import React from "react";

import {useNavigate} from "react-router-dom";
import { Container,  Stack,  Button, Typography, Grid, Paper } from "@mui/material";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


export default function Mainpage() {

    let Navigate = useNavigate();

    return (
      <>
      
    <Container class="bg1"> 
   
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
        <div class="otsikko">Snooker</div>
        <input onClick={()=>Navigate("/snooker")}  type="button" class="paper-btn-menu" value="Snooker"/>
        <input onClick={()=>Navigate("/results")} type="button" class="paper-btn-menu" value="Results"/>
        <input onClick={()=>Navigate("/login")}  type="button" class="paper-btn-menu" value="Login"/>   
    </Stack>

    
    </Container>
    </>
    )
}