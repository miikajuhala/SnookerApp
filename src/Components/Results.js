
import React from "react";
import { Box, Button, Container, Grid, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";



export default function Results(props) {

    //storing frames
    const [frames, setFrames] = React.useState([]);
    const id = sessionStorage.getItem("userId");
    const navi = useNavigate()

    React.useEffect(() => {getFrames()},[]);


    const getFrames = () =>{
        axios.get("https://snookerserver.herokuapp.com/api/users/"+id+"/frames" ,{
            
        headers:{"Authorization": sessionStorage.getItem("jwt")},
        })
        .then(res => {
            console.log(frames);
            console.log(res.data._embedded.frames);
            //reverse to display newest first
            setFrames(res.data._embedded.frames.reverse());
        })
    }

    
    //
     const continueGame =(i)=>{
        console.log(frames[i].reds)
        props.settotalBalls({reds: frames[i].reds, colors: frames[i].colors, yellow: frames[i].yellow, green: frames[i].green, brown: frames[i].brown, blue: frames[i].blue, pink: frames[i].pink, black: frames[i].black })
        props.setundo({recentBall:"", recentPlayer:null, recentPoints:0, setRecentPlayer: null})
        props.setPlayer1({id: 1,  name: frames[i].player1, points: frames[i].player1Score, fouls: 0})
        props.setPlayer2({id: 1,  name: frames[i].player2, points: frames[i].player2Score, fouls: 0});
        navi("/snooker")
     }
    
     
    
    return (
    <>
    <Container>

        <Paper sx={{marginBottom:3, marginTop:2}}>
            <h1 className="text">Saved Games</h1>
        </Paper>
        
         {/* <Typography>  </Typography>             
                <Typography> {frame.player2}: {frame.player2Score}</Typography>
                <Typography sx={{textAlign:"right",}}> {frame.player2}: {frame.player2Score}</Typography> */}
       <Box marginBottom={20}>        
        {frames.map((frame, index) => 
        
        <Accordion key={index} className="accordion">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography sx={{marginLeft:2}} >{frame.player1}: {frame.player1Score} </Typography>
            <Typography sx={{marginLeft:7}}>{frame.player2}: {frame.player2Score} </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion2">
        
            <Typography>
                {   
                "name: "+frame.name +"  |  "+"reds on table: "+frame.reds
                }
            </Typography>
            <button className="paper-btn-results" onClick={()=>continueGame(index)}>Continue game</button>
            <button className="paper-btn-results" onClick={()=>alert("game delete todo")}>Delete</button>
        </AccordionDetails>
        </Accordion>
        

        )}
        </Box>
    </Container>
    </>
    )
}