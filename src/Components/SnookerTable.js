
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DragDropContainer} from 'react-drag-drop-container';
import black from "../assets/Black50.png"
import yellow from "../assets/Yellow50.png"
import green from "../assets/Green50.png"
import brown from "../assets/Brown50.png"
import blue from "../assets/Blue50.png"
import pink from "../assets/Pink50.png"
import red from "../assets/Red50.png"

export default function SnookerTable(props) {

   

    return (
        
    <>
    <Box sx={{ height: "100%", width: '100%'}}>

        {/* container for yellow, brown and green */}
        <Grid 
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
             mt={16}
        >
        
            <Grid item>  
                {props.props.totalBalls.yellow &&
                <DragDropContainer targetKey="foo" dragData={{points: 2, amount:1, type: "colors", ball: "yellow"}} >
                <img className="img"  src={yellow}alt="yellow"></img>
                </DragDropContainer>
                }
            </Grid>
            <Grid item>
                {props.props.totalBalls.brown &&
                <DragDropContainer  targetKey="foo" dragData={{points: 4, amount:1, type: "colors", ball: "brown"}} >
                <img  className="img" src={brown} alt="brown"></img>
                </DragDropContainer>
                }
            </Grid>
            <Grid item> 
                {props.props.totalBalls.green &&
                <DragDropContainer targetKey="foo" dragData={{points: 3, amount:1, type: "colors", ball: "green"}} >
                <img  className="img" src={green} alt="green"></img>
                </DragDropContainer>
                }

            </Grid>

        </Grid>

        {/* container for all other balls than yellow, brown or green */}
        <Grid 
        container 
        direction="column"
        alignItems={"center"}
        >
            <Grid item  sx={{mt:10.5}}> 
                {props.props.totalBalls.blue &&
                <DragDropContainer targetKey="foo" dragData={{points: 5, amount:1, type: "colors", ball: "blue"}} >
                <img className="img"  src={blue} alt="img"></img>
                </DragDropContainer>
                }
            </Grid>
            <Grid item  sx={{mt:8}}> 
                {props.props.totalBalls.pink &&
                <DragDropContainer targetKey="foo" dragData={{points: 6, amount:1, type: "colors", ball: "pink"}} >
                <img  className="img" src={pink} alt="img"></img>
                </DragDropContainer>
                }
            </Grid>
        
            <Grid item> 
                {props.props.totalBalls.reds>=1 && 
                <DragDropContainer targetKey="foo" dragData={{points: 1, amount:15, type: "reds"}} >
                <img  className="img" src={red} alt="img"></img>
                </DragDropContainer>
                }
            </Grid>
            <Grid item > 
                {props.props.totalBalls.black &&
                <DragDropContainer targetKey="foo" dragData={{points: 7, amount:1, type: "colors", ball: "black"}} >
                <img  className="img" src={black} alt="img"></img>
                </DragDropContainer>
                }
            </Grid>
        
        </Grid>
    </Box>
    </>
    )
}