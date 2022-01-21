
import React from "react";
import { Box, Paper, Grid} from "@mui/material";
import { DropTarget } from 'react-drag-drop-container';
import SnookerTable from "./SnookerTable";
import table2 from "./table2.png"





export default function Snooker(props) {

    const styles = {
        paperContainer: {
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${table2})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
           
            
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
    }

    

    return (
    <>
      
    <Box sx={{ height: "100%", width: '100%', minWidth:364}}   >
            
        <Grid container >
            {/* snooker table, with draggable snookerballs */}
            
            <Grid item xs={1} sm={3} xl={5} sx={{backgroundColor: "blue", height:"100%"}}> 
                {/* player 1 target */}
                <DropTarget 
                    targetKey="foo" 
                    onHit={(e)=>handleHit(e, props.player1, props.setPlayer1)}>
                    <Box sx={{height:500}}> Player 1 target</Box>
                </DropTarget>
            </Grid>

            {/*Snooker table component containing draggable balls  */}
            <Grid item  xs={10} sm={6} xl={3}    sx={{height:500}} style={styles.paperContainer}>
                <SnookerTable totalBalls={props.totalBalls} props={props} ></SnookerTable>
        
            </Grid>
            
            

            <Grid item xs={1} sm={3} xl={4} sx={{backgroundColor: "blue", height:"100%"}}>
                {/* player 2 target */}
                <DropTarget 
                    targetKey="foo" 
                    onHit={(e)=>handleHit(e, props.player2, props.setPlayer2)}> 
                        <Box sx={{height:500}} >Player 2 target</Box>
                </DropTarget>
            </Grid>
            
        </Grid>

            
        <Paper 
        sx={{
            height: '5%',
            width: '100%',
            }}>
            <>{props.totalBalls.reds+" "}</>
            <>{props.player1.points +" "}</>
            <>{props.player2.points +" "}</>
            scores 
        </Paper>
    </Box>

    </>
    )
}