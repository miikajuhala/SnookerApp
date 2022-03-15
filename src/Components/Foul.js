
import { Button, Grid, Modal, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DragDropContainer} from 'react-drag-drop-container';
import white from "../assets/White50.png"


export default function Foul(props) {
    const [open, setOpen] = React.useState(false);
    //todo: if not logged, inform before opening modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    

    return (
        
    <>
    {/* Scores and additional information gridbox */}
    <Grid 
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        mb={0}
        sx={{
            height: '5%',
            width: '100%',
            fontWeight: 'medium',
    }}>

            {/* Fouls */}
            {/* <Grid item xs={12}>
                Fouls
            </Grid> */}
            
            <Grid item xs={2} >
                <DragDropContainer targetKey="foo" dragData={{points: 4, amount:1, type: "foul"}} >
                    <Paper elevation={6} sx={{minWidth:55}}>
                        <Typography variant="overline" display="block" gutterBottom>
                        +4
                        </Typography>
                    </Paper>
                </DragDropContainer>
            </Grid>
            <Grid item xs={2}>
                <DragDropContainer targetKey="foo" dragData={{points: 5, amount:1, type: "foul"}} >
                    <Paper elevation={6}  sx={{minWidth:55}}>
                        <Typography variant="overline" display="block" gutterBottom>
                        +5
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
                {/* <Paper elevation={6}> */}
                    {/* <Button variant="overline"  sx={{textTransform: "none"}} 
                    onClick={()=>props.undoRecent()}>
                        Undo
                    </Button> */}
                    <input onClick={()=>props.undoRecent()} type="button" class="paper-btn-fouls" value="Undo"/>
                {/* </Paper> */}
            </Grid>
            <Grid item xs={3} marginLeft={1.5} marginRight={1.5}  sx={{mb:1}}>
                {/* <Paper elevation={6} > */}
                    {/* <Button variant="overline"  sx={{textTransform: "none"}} onClick={props.restartGame}>
                        Restart 
                    </Button> */}
                    <input onClick={()=>props.restartGame()} type="button" class="paper-btn-fouls" value="Restart"/>
                {/* </Paper> */}
            </Grid>
            <Grid item xs={3.4}  sx={{mb:1}}>
                {/* <Paper elevation={6}> */}
                    {/* <Button variant="overline" sx={{textTransform: "none"}} onClick={handleOpen} >
                        Save Game
                    </Button> */}
                    <input onClick={()=>handleOpen()} type="button" class="paper-btn-fouls" value="Save Game"/>
                {/* </Paper> */}
            </Grid>

        </Grid>

        {/* Popup for saving game */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Save Game
                </Typography>

                <TextField id="outlined-basic" name ="name" label="Player 1" variant="outlined" 
                onChange={(event)=> props.props.setPlayer1({...props.props.player1, [event.target.name]: event.target.value})}/>

                <TextField id="outlined-basic" name ="name" label="Player 2" variant="outlined" 
                onChange={(event)=> props.props.setPlayer2({...props.props.player2, [event.target.name]: event.target.value})}/>

                <Box alignContent="right">

                    <input type="button" value="Save" class="paper-btn-fouls" 
                    onClick={()=>{
                        props.saveGame()
                        handleClose()}
                    }/> 
                    
                    <input onClick={handleClose} type="button" class="paper-btn-fouls" value="Close"/>
                    
                    
                </Box>  
            </Box>

        </Modal>
    </>
    )
}  