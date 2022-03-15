
import React from "react";
import { Box, Paper, Grid} from "@mui/material";
import { DropTarget } from 'react-drag-drop-container';
import SnookerTable from "./SnookerTable";
import table2 from "./table2.png"
import Foul from "./Foul";
import Scores from "./Scores";
import { Container } from "reactstrap";



//TODO: Pirun siisti jos mukaan embedded browseriin sääntösivu joltai netisivulta

export default function Snooker(props) {

    

    // styles for  elements
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

    // Handles hits to players DnD score areas
    const handleHit =(e, player, setplayer)=>{

        
        //if red ball, -1 red ball and add score for player
        if(e.dragData.type==="reds"){
            props.setundo({...props.undo, recentBall: "reds", recentPlayer: player, recentPoints: player.points, setRecentPlayer: setplayer})
            props.settotalBalls({...props.totalBalls, reds: props.totalBalls.reds-1})
            setplayer({...player, points: player.points + 1 })
           
            
        }
        //if type colors, and still 1 or more reds on table, add points and keep colorball on table
        if(e.dragData.type==="colors" && props.totalBalls.reds>=1){
            props.setundo({recentBall: e.dragData.ball, recentPlayer: player, recentPoints: player.points, setRecentPlayer: setplayer})
            setplayer({...player, points: player.points + e.dragData.points  })
            
        }

        //if type colors, and 0 reds on table, add score and take out the color ball
        if(e.dragData.type==="colors" && props.totalBalls.reds<=0){
           
            //if recent ball was red and same player color ball stays
            if(props.undo.recentBall==="reds" && props.undo.recentPlayer.name===player.name){
            props.setundo({recentBall: e.dragData.ball, recentPlayer: player, recentPoints: player.points, setRecentPlayer: setplayer})
            }
            else props.settotalBalls({...props.totalBalls, [e.dragData.ball]: false, colors: props.totalBalls.colors-1})
            
            props.setundo({recentBall: e.dragData.ball, recentPlayer: player, recentPoints: player.points, setRecentPlayer: setplayer})
            
            setplayer({...player, points: player.points + e.dragData.points  })
        }
        // if type foul, add points
        if(e.dragData.type==="foul"){
            props.setundo({recentBall: "foul", recentPlayer: player, recentPoints: player.points, setRecentPlayer: setplayer})
            setplayer({...player, points: player.points + e.dragData.points  })
                
        }

    props.setOpen(false);
    props.setOpen(true)
    props.setMsg(e.dragData.points+" points added to "+player.name)
    console.log(props.totalBalls.reds)
    console.log(props.player2.points)
        
    }

    

    return (
    <>
    <Box sx={{ height: "100%", width: '100%', minWidth:364}} >
            
        {/* Scores */}
        <Scores props={props}></Scores>

        
        {/* snooker table, with draggable snookerballs */}
        <Grid container>
        
            {/* player 1 target */}
            <Grid  item xs={1.33333} sm={3.15} xl={4.5} sx={styles.targetContainer}> 
                <Paper class="sivupaneeli" elevation={20} sx={{bgcolor: styles.targetContainer.bg}}>
                    <DropTarget 
                        targetKey="foo" 
                        onHit={(e)=>handleHit(e, props.player1, props.setPlayer1)}>
                        <Box className="my_target" sx={{height:450}}> P1</Box>
                    </DropTarget>
                </Paper>
            </Grid>

            {/*Snooker table component containing draggable balls  */}
            <Grid item  xs={9.33} sm={5.7} xl={3} sx={{height:500}} style={styles.paperContainer}>
                <SnookerTable totalBalls={props.totalBalls} props={props} ></SnookerTable>
            </Grid>
            
            
            {/* player 2 target */}
            <Grid item xs={1.33} sm={3.15} xl={4.5} sx={styles.targetContainer}>
                <Paper class="sivupaneeli" elevation={20} sx={{bgcolor: styles.targetContainer.bg}}>
                    <DropTarget 
                        targetKey="foo" 
                        onHit={(e)=>{handleHit(e, props.player2, props.setPlayer2)}}>
                        <Box className="my_target"  sx={{height:450 }} >P2</Box>
                    </DropTarget>
                </Paper>
            </Grid>
            
        </Grid>




        {/* Some kind of settings / restart options are needed ez to access */}
        {/* Fouls */}
        <Foul totalBalls={props.totalBalls} undoRecent={props.undoRecent} restartGame={props.restartGame} saveGame={props.saveGame} props={props}></Foul>

    </Box>
   
    </>
    )
}