
import React from "react";
import { Box, Button, Container, Grid, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';




export default function Results() {

    //storing frames
    const [frames, setFrames] = React.useState([]);

    //fetching results
    const url = "http://localhost:8080/"
    const id = sessionStorage.getItem("userId");

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    React.useEffect(() => {
    getFrames()
    },[]);

    const getFrames = () =>{
        axios.get(url+"api/users/"+id+"/frames" ,{
        headers:{
            "Authorization": sessionStorage.getItem("jwt")
        },
        })
        .then(res => {
            console.log(frames);
            console.log(res.data._embedded.frames);
            setFrames(res.data._embedded.frames);
        })
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    // TODO:this
    // const continueGame =()=>{
    //     //set all frame info to app.js consts and redirect to Snooker component
    // }
    
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
    {
    frames.map((frame, index) => 
        <>
        <Item elevation={7} sx={{m:2}} >

        <Grid 
            container
            direction={"row"}
        >
            
            <Grid item xs={6}>
                    <Grid 
                        container
                        direction={"column"}
                        justifyContent={"left"}
                        alignItems={"left"}
                        ml={2}  
                        width={"40%"}
                    > 
                        <Grid item xs={5} sx={{mt:0.5}} >
                            <Typography> {frame.player1}: {frame.player1Score}  </Typography> 
                        </Grid>  
                        <Grid item xs={5} sx={{mt:0.5}}>
                            <Typography> {frame.player2}: {frame.player2Score}</Typography>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid item xs={6}>
                    <Grid 
                        container
                        direction={"row"}
                        justifyContent={"right"}
                    >
                        <Button sx={{ mt:1.5}} onClick={()=>setOpen(true)}>show more info</Button>
                    </Grid>
            </Grid>
        </Grid>
            
        </Item>   
        </>     
    )
    }

    {/* TODO: korvaa jollain avautuvalla animaatiohommal jonhka voi laittaa vaikka mapin sisään */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                
            </Typography>
            </Box>
    </Modal> 
    
    </Container>
    </>
    )
}