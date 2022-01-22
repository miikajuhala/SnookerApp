
import React from "react";
import { Box, Paper, Grid, Typography, Container} from "@mui/material";
import { DropTarget, DragDropContainer } from 'react-drag-drop-container';
import SnookerTable from "./SnookerTable";
import table2 from "./table2.png"
import { minWidth, width } from "@mui/system";
import Foul from "./Foul";





export default function Snooker(props) {

    const styles = {
        paperContainer: {
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${table2})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
           
            
        },
        targetContainer:{
            height: "100%",
            mt:3,
            backgroundColor: "white"
        }
    };

    const handleHit =(e, player, setplayer)=>{
        console.log(e)
        //if red ball, -1 red ball and add score for player
        if(e.dragData.type==="reds"){
            props.settotalBalls({...props.totalBalls, reds: props.totalBalls.reds-1})
            setplayer({...player, points: player.points + 1 })
        }
        //if type colors, and still 1 or more reds on table, add points and keep colorball on table
        if(e.dragData.type==="colors" && props.totalBalls.reds>=1){
            setplayer({...player, points: player.points + e.dragData.points  })}
        //if type colors, and 0 reds on table, add score and take out the color ball
        if(e.dragData.type==="colors" && props.totalBalls.reds<=0){
            setplayer({...player, points: player.points + e.dragData.points  })
            props.settotalBalls({...props.totalBalls, [e.dragData.ball]: false, colors: props.totalBalls.colors-1})
        }
        if(e.dragData.type==="foul"){
            setplayer({...player, points: player.points + e.dragData.points  })}

        props.restartGame(true)
        props.setMsg("Added "+e.dragData.points+" points to "+player.name)
        
        
    }

    

    return (
    <>

  
      
    <Box className="backround" sx={{ height: "100%", width: '100%', minWidth:364}} >
            
        <Grid container >
            {/* snooker table, with draggable snookerballs */}
            
            {/* player 1 target */}
            <Grid  item xs={1.33} sm={3} xl={5} sx={styles.targetContainer}> 
            <Paper  elevation={20}>
                <DropTarget 
                    targetKey="foo" 
                    onHit={(e)=>handleHit(e, props.player1, props.setPlayer1)}>
                    <Box className="my_target" sx={{height:450}}> Player 1 target</Box>
                </DropTarget>
            </Paper>
            </Grid>

            {/*Snooker table component containing draggable balls  */}
            <Grid item  xs={9.33} sm={6} xl={3}    sx={{height:500}} style={styles.paperContainer}>
                <SnookerTable totalBalls={props.totalBalls} props={props} ></SnookerTable>
        
            </Grid>
            
            
            {/* player 2 target */}
            <Grid item xs={1.33} sm={3} xl={4} sx={styles.targetContainer}>
                <Paper elevation={20}>
                <DropTarget 
                    targetKey="foo" 
                    onHit={(e)=>{handleHit(e, props.player2, props.setPlayer2)}}>
                    <Box className="my_target"  sx={{height:450 }} >Player 2 target</Box>
                </DropTarget>
                </Paper>
            </Grid>
            
        </Grid>




        {/* Some kind of settings / restart options are needed ez to access */}
        {/* Fouls */}
        <Foul totalBalls={props.totalBalls} props={props}></Foul>

    </Box>
   
    </>
    )
}