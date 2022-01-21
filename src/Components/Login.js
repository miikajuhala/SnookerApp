import React from 'react';
import Snackbar from '@mui/material/Snackbar';

import Box from '@mui/material/Box';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {Grid, Paper} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import SwipeableViews from 'react-swipeable-views';
import jwt from 'jwt-decode'
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import loginImg from './login.jpg'


//Confiq for swiper
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
    >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
    );
}
  //Confiq for swiper
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  //Confiq for swiper
    function a11yProps(index) {
        return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
        };
    }
  //Confiq for swiper
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  
  

export default function Login(props) {

    const url = "http://localhost:8080/"
    const [open, setOpen] = React.useState(false)
    const [msg, setMsg] = React.useState('')
    const [user, setUser] = React.useState({username: "", password:""});


    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChange1 = (event)=>{
        setUser({...user, [event.target.name]: event.target.value});
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    // Configurations for swiper element
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    // Configurations for swiper element
    const fabs = [
      {
        color: 'secondary',
        sx: fabStyle,
        icon: <LoginIcon onClick={()=>getToken()} />,
        label: 'Add',
      },
      {
        color: 'primary',
        sx: fabStyle,
        icon: <LoginIcon onClick={()=>createNewUser()}/>,
        label: 'Edit',
      },
    ]







//Login and jwt save
const getToken = () => {

    axios.post(url+"login", {
        username:user.username, password:user.password
      })
    .then((response) => {
    console.log(response);
      
    const jwtToken = response.headers.authorization

    if (jwtToken !== null) {
      sessionStorage.setItem("jwt", jwtToken)
      sessionStorage.setItem("username", jwt(jwtToken).sub)
      setUser({
        ...user,
        username: "",
        password: ""
      })
      props.setLogged(true);
      console.log(sessionStorage.getItem("jwt"))
      setOpen(true)
      setMsg("Logged in succesfully!")

    }
    }, (error) => {
      console.log(error)
      setMsg(error + "error")
      setOpen(true)
    });
    
    }

    //New user register and auto-login right after
    function createNewUser() {

      axios.post(url + "api/register", {
          username: user.username,
          passwordHash: user.password,
          role: "USER"
        })
        .then(function (response) {
          //kirjaa suoraan sisään kun rekisteröityy
          getToken();


        })
        .catch(function (error) {
          console.log(error);
        });
    
    }
    
    

 



return( 
    

    


    <main> 

{/* Paper that shows if user already logged in */}
{props.logged===true && 
<Paper style=
{{
    padding: 40,
    margin: 10,
    border: "1px solid black"
}}> U are logged in 
</Paper>}

{props.logged ===false && 
<div className="image-container">
    <img src={loginImg} width="300" style={{position: 'relative'}} alt="logo" />
</div>   
}
   
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="top"
>

    {props.logged ===false && 
    <Box sx={{
            bgcolor: 'background.paper',
            maxwidth: 500,
            position: 'relative',
            minHeight: 200,
             }}>

                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="action tabs example"
                            >
                                <Tab label="Login" {...a11yProps(0)} />
                                <Tab label="Sign Up" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                        <div> Login </div>
                            <TextField id="outlined-basic" name ="username" label="username" variant="outlined" onChange={handleChange1}/>
                            <TextField id="filled-basic" name ="password" type="password" label="password" variant="filled" onChange={handleChange1} />
                        </TabPanel>

                        <TabPanel value={value} index={1} dir={theme.direction}>
                        <div> Sign Up </div>
                            <TextField id="outlined-basic" name ="username" label="username" variant="outlined" onChange={handleChange1}/>
                            <TextField id="filled-basic" name ="password" type="password" label="password" variant="filled" onChange={handleChange1} />
                        </TabPanel>

                </SwipeableViews>

                {fabs.map((fab, index) => (
                    
                <Zoom
                    key={fab.color} in={value === index}
                    timeout={transitionDuration}
                    unmountOnExit
                    style={{transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,}} 
                >

                    <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                        {fab.icon}
                    </Fab>
                </Zoom>
        ))}
        
    </Box>
        }
</Grid> 

<Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={()=>setOpen(false)}
        message={msg}
        // action={()=>setOpen(false)}
        alignItems="center"
        justifyContent="center"
        color="secondary"
      />
      </main> 
)
}

