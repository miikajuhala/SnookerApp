
import React, { useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import axios from "axios";





export default function Results() {

    const [frames, setFrames] = React.useState([]);
    const [result, setResults] = React.useState({player1:null, player2: null, player1Score:0, player2Score:0})


    const url = "http://localhost:8080/"
    const id = sessionStorage.getItem("userId");


    React.useEffect(() => {
    getFrames()
    },[]);

    const getFrames = () =>{
        axios.get(url+"api/users/"+id+"/frames" ,{
        headers:{
            "Authorization": sessionStorage.getItem("jwt")
        },
        })
        .then(res => {
            console.log(frames);
            console.log(res.data._embedded.frames);
            setFrames(res.data._embedded.frames);
        })
    }
    // TODO:this
    const continueGame =()=>{
        //set all frame info to app.js consts and redirect to Snooker component
    }


    return (
    <>
  
    {
    frames.map((frame, index) => 
    <Paper>
        {frame.player1}+"  "+{frame.player1Score}
        {frame.player2}+"  "+{frame.player2Score}
    </Paper>   
    )
    }
    </>
    )
}