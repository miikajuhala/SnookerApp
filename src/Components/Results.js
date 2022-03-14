
import React from "react";
import { Box, Button, Container, Grid, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { textAlign } from "@mui/system";




export default function Results() {

    //storing frames
    const [frames, setFrames] = React.useState([]);
    const id = sessionStorage.getItem("userId");
    

    React.useEffect(() => {getFrames()},[]);


    const getFrames = () =>{
        axios.get("https://snookerserver.herokuapp.com/api/users/"+id+"/frames" ,{
            
        headers:{"Authorization": sessionStorage.getItem("jwt")},
        })
        .then(res => {
            console.log(frames);
            console.log(res.data._embedded.frames);
            setFrames(res.data._embedded.frames);
        })
    }


    // TODO:this
     const continueGame =()=>{
         //set all frame info to app.js consts and redirect to Snooker component
     }
    
    //paper item styles
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
        alignItems:"center",
    }));
    
    return (
    <>
    <Container sx={{ width: '100%', maxWidth: 500 }}>

        <Paper>
            <Typography variant="h2" component="h2" sx={{textAlign: 'center', mt:2}}>
                Results
            </Typography>
        </Paper>
        
        {frames.map((frame, index) => 
            <Item elevation={7} sx={{m:2}} >
                <Typography> {frame.player1}: {frame.player1Score}  </Typography>             
                <Typography> {frame.player2}: {frame.player2Score}</Typography>
                <Typography sx={{textAlign:"right",}}> {frame.player2}: {frame.player2Score}</Typography>
            </Item>        
        )}
        
    </Container>
    </>
    )
}