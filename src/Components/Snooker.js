
import React from "react";
import { Box, Paper, Grid, Typography} from "@mui/material";
import { DropTarget } from 'react-drag-drop-container';
import SnookerTable from "./SnookerTable";
import table2 from "./table2.png"
import Foul from "./Foul";
import { Score } from "@mui/icons-material";
import Scores from "./Scores";



//TODO: Pirun siisti jos mukaan embedded browseriin sääntösivu joltai netisivulta

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
            backgroundColor: "white",
            bg: "white"
        }
    };

    //TODO: doesnt understand last red ball rule yet
    const handleHit =(e, player, setplayer)=>{
        
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

        props.setOpen(false);
        props.setOpen(true)
        props.setMsg(e.dragData.points+" points added to "+player.name)
        console.log(props.totalBalls)
        
    }

    

    return (
    <>

  
      
    <Box className="backround" sx={{ height: "100%", width: '100%', minWidth:364}} >
            
            {/* Scores */}
        <Scores props={props}></Scores>

        
        {/* snooker table, with draggable snookerballs */}
        <Grid container >
         

            {/* player 1 target */}
            <Grid  item xs={1.33} sm={3.15} xl={4.5} sx={styles.targetContainer}> 
            <Paper  elevation={20} sx={{bgcolor: styles.targetContainer.bg}}>
                <DropTarget 
                    targetKey="foo" 
                    onHit={(e)=>handleHit(e, props.player1, props.setPlayer1)}>
                    <Box className="my_target" sx={{height:450}}> Player 1 target</Box>
                </DropTarget>
            </Paper>
            </Grid>

            {/*Snooker table component containing draggable balls  */}
            <Grid item  xs={9.33} sm={5.7} xl={3}    sx={{height:500}} style={styles.paperContainer}>
                <SnookerTable totalBalls={props.totalBalls} props={props} ></SnookerTable>
        
            </Grid>
            
            
            {/* player 2 target */}
            <Grid item xs={1.33} sm={3.15} xl={4.5} sx={styles.targetContainer}>
                <Paper elevation={20} sx={{bgcolor: styles.targetContainer.bg}}>
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