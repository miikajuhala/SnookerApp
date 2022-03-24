import {Grid, Paper, Typography } from "@mui/material";



export default function Scores(props) {

    const styles = {
        paperContainer: {
            background: {
                paper: 'white',
              },
        }

    };

    return (
        
    <Grid 
    container
    justifyContent={"center"}
    >
        <Grid item xs={8}  marginRight={0.5}>
            
            <Paper elevation={1} sx={{bgcolor: styles.paperContainer.background.paper}}>
            <Grid 
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            >

                    

                    <Grid item xs={4.5} m={0.2} mr={1}>
                        <Paper elevation={6} sx={{maxHeight:39}}>
                            <Typography variant="overline" display="block" gutterBottom>
                            {props.props.player1.name} : {props.props.player1.points}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={4.5} m={0.2} ml={1} sx={{maxHeight:39}}> 
                        <Paper elevation={6}>
                            <Typography variant="overline" display="block" gutterBottom>
                            {props.props.player2.name} : {props.props.player2.points +" "}
                            </Typography>

                        </Paper>
                    </Grid>
            </Grid>
            </Paper>

        </Grid>
    </Grid>

        )
}