
import './App.css';
import React from 'react';
import Menu from './Components/Menu';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Mainpage from './Components/Mainpage';
import Snooker from './Components/Snooker';
import Results from './Components/Results';
import BottomNavigation1 from './Components/BottomNavigation1';
import Settings from './Components/Settings';
import { IconButton, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import CloseIcon from '@mui/icons-material/Close';


function App() {

  // App.js controls apps all logged checks.
  const [logged, setLogged] = React.useState(sessionStorage.getItem("jwt")!==null)
  
  const [open, setOpen] = React.useState(false)
  const [msg, setMsg] =  React.useState('')


   //Snookers infromation stored here during game
   const [totalBalls, settotalBalls] = React.useState({reds: 2, colors: 6, yellow: true, green: true, brown: true, blue: true, pink: true, black: true })
   const [undo, setundo] = React.useState({recentBall:"", recentPlayer:null, recentPoints:0, setRecentPlayer: null})
   const [player1, setPlayer1] = React.useState({id: 1, name: "player1", points: 0, fouls: 0})
   const [player2, setPlayer2] = React.useState({id: 2, name: "player2", points: 0, fouls: 0})

   const restartGame = ()=>{
    setOpen(true);
    setMsg("doesnt work just yet")
   }

   // function that handles undo button in snooker game
   const undoRecent = ()=>{
  
      // if recent ball was red => add one red and take reds points from player
      if(undo.recentBall==="reds"){
          settotalBalls({...totalBalls, reds: totalBalls.reds+1})
          // players function passed from snooker.js, allows to automatically change correct players points
          undo.setRecentPlayer({...undo.recentPlayer, points: undo.recentPoints}) //undo.recentPlayer.points - 1
      }
      //  if recent score was foul, take recent score away from player
      else if(undo.recentBall==="foul"){
          undo.setRecentPlayer({...undo.recentPlayer, points: undo.recentPoints })
      }
      // if recent score was color ball, take points away, and put back on table if dropped
      else{
          if(totalBalls[undo.recentBall]===false){
            settotalBalls({...totalBalls, [undo.recentBall]: true })
          }
          undo.setRecentPlayer({...undo.recentPlayer, points: undo.recentPoints })
      }
  
   }
  
   // snackbar
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

//snackbar
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=>setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
)

  // handles logout
  function Logout(){
    sessionStorage.clear("jwt")
    sessionStorage.clear("role")
    sessionStorage.clear("username")
    setLogged(false);
    console.log(sessionStorage.getItem("jwt"))
    // window.location.replace("http://localhost:3000/loginpage")
  
  }




 
  return (

  <>
     {/* <Menubar with login/register */}
     {/* <Menu logout={Logout} logged={logged} setLogged={setLogged}></Menu> */}

    {/* <Body with all functionalities */}
    <Routes>
        <Route path="/login"  element={<Login logout={Logout} logged={logged}  setLogged={setLogged}  />}></Route>
        <Route path="/"  element={<Mainpage logout={Logout} logged={logged} setLogged={setLogged}/> }></Route>
        <Route path="/snooker"  element={<Snooker totalBalls={totalBalls} settotalBalls={settotalBalls} undo={undo} setundo={setundo} player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} restartGame={restartGame} undoRecent={undoRecent} setOpen={setOpen} setMsg={setMsg}/>}> </Route>
        <Route path="/results"  element={<Results />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
    </Routes>
    {/* //Navigation bar */}
     {/* <BottomNavigation1 ></BottomNavigation1>  */}

     <Snackbar
        lenght={13}
        open={open}
        anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
        autoHideDuration={2000}
        onClose={()=>setOpen(false)}
        message={<Alert severity="success">{msg}</Alert>}
        action={action}
      />

  </>
    

  );
}

export default App;
