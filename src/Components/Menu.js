
import React from "react";
import {Link} from "react-router-dom";
import {FcAbout} from 'react-icons/fc';
import { Button, Grid } from "@mui/material";

export default function Menu(props) {
    return (
    <>
    
        <div className="topnav" id="myTopnav">
        
        <Grid container  align="center" justifyContent= "left" alignItems = "left" style={{marginLeft: 20}}>
            <Link style={{paddingRight: 40}} to="/"> <FcAbout  size={30} color="primary"/> </Link>
            {!props.logged &&  <Link style={{paddingRight: 40}} to="/login">Login </Link>}
            {props.logged && <Button onClick={props.logout}>Logout</Button>}
        </Grid>
        </div>

        
    
    </>
    )
}