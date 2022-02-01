
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DragDropContainer} from 'react-drag-drop-container';
import white from "../assets/White50.png"


export default function Foul(props) {



    return (
        
    <>
        {/* Scores and additional information gridbox */}
        <Grid 
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        mt={0.01}
        sx={{
            height: '5%',
            width: '100%',
            fontWeight: 'medium',
        }}>


            {/* grid items */}



            


            {/* Fouls */}
            <Grid item xs={12} mb={1}>
                Fouls
            </Grid>
            
            <Grid item xs={2} >
                <DragDropContainer targetKey="foo" dragData={{points: 2, amount:1, type: "foul"}} >
                    <Paper elevation={6} sx={{minWidth:55}}>
                        <Typography variant="overline" display="block" gutterBottom>
                        +2
                        </Typography>
                    </Paper>
                </DragDropContainer>
            </Grid>
            <Grid item xs={2}>
                <DragDropContainer targetKey="foo" dragData={{points: 4, amount:1, type: "foul"}} >
                    <Paper elevation={6}  sx={{minWidth:55}}>
                        <Typography variant="overline" display="block" gutterBottom>
                        +4
                        </Typography>
                    </Paper>
                </DragDropContainer>
            </Grid>

                <Grid item xs={2}>
                    <DragDropContainer targetKey="foo" dragData={{points: 4, amount:1, type: "foul", ball: "white"}} >
                        <img className="img"  src={white} alt="white"></img>
                    </DragDropContainer>
                </Grid>

            <Grid item xs={2}>
                <DragDropContainer targetKey="foo" dragData={{points: 6, amount:1,type: "foul"}} >
                    <Paper elevation={6}  sx={{minWidth:55}}>
                        <Typography variant="overline" display="block" gutterBottom>
                        +6
                        </Typography>
                    </Paper>
                </DragDropContainer>
            </Grid>
            <Grid item xs={2}>
                <DragDropContainer targetKey="foo" dragData={{points: 7, amount:1, type: "foul"}} >
                    <Paper elevation={6}  sx={{minWidth:55}}>
                        <Typography variant="overline" display="block" gutterBottom>
                        +7
                        </Typography>
                    </Paper>
                </DragDropContainer>
            </Grid>


            
        

            {/* undo, restart, save game buttons */}
            <Grid item xs={3}  sx={{mb:1}}>
                <Paper elevation={6}>
                    <Button variant="overline"  sx={{textTransform: "none"}} 
                    onClick={()=>props.undoRecent()}>
                        Undo
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={3} marginLeft={1.5} marginRight={1.5}  sx={{mb:1}}>
                <Paper elevation={6} >
                    <Button variant="overline"  sx={{textTransform: "none"}} onClick={props.restartGame}>
                        Restart
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={3.4}  sx={{mb:1}}>
                <Paper elevation={6}>
                    <Button variant="overline" sx={{textTransform: "none"}} onClick={props.saveGame} >
                        Save Game
                    </Button>
                </Paper>
            </Grid>

        </Grid>
    </>
    )
}