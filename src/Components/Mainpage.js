
import React from "react";

import {useNavigate} from "react-router-dom";
import { Container,  Stack,  Button, Typography } from "@mui/material";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
export default function Mainpage() {

  


    const Item = styled(Button)(({ theme1 }) => ({
        ...theme.typography.body1,
        textAlign: 'center',
        height: 60,
        lineHeight: '60px',
        textTransform: 'none'
        
      }));

      const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#1e88e5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#757ce8',
            main: '#273377',
            dark: '#757ce8',
            contrastText: '#fff',
          },
        },
      });

      theme.typography.subtitle2 = {
        fontSize: '1rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
      };

    let Navigate = useNavigate();





    return (
    <>
    <ThemeProvider theme={theme}> 
    <Container 
      fixed
      style={{padding: 50}}
     >
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{paddingTop: 20}}
        >
            <Item sx={{ width: 2/3 }} onClick={()=>Navigate("/snooker")}  variant="contained" color="primary"> 
                <Typography variant="subtitle2"> Start a new game</Typography> 
            </Item>
            <Item sx={{ width: 2/3 }} onClick={()=>Navigate("/results")}  variant="contained" color="primary">
                <Typography variant="subtitle2">See recent results</Typography> 
            </Item>
            <Item sx={{ width: 2/3 }} onClick={()=>Navigate("/login") } variant="contained" color="primary">
               <Typography variant="subtitle2">Login</Typography> 
            </Item>
        </Stack>
    </Container>
    </ThemeProvider>

    </>
    )
}