import { Grid, Paper, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";


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
        <Grid item xs={8}  marginRight={0.5} mt={1}>
            
            <Paper elevation={1} sx={{bgcolor: styles.paperContainer.background.paper}}>
            <Grid 
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            >
                    <Grid item xs={5} m={0.2} mr={1}>
                        <Paper elevation={6}>
                            <Typography variant="overline" display="block" gutterBottom>
                                Player1: {props.props.player1.points +" "}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={5} m={0.2} ml={1}>
                        <Paper elevation={6}>
                            <Typography variant="overline" display="block" gutterBottom>
                                Player2 : {props.props.player2.points +" "}
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
            </Paper>

        </Grid>
    </Grid>

        )
}