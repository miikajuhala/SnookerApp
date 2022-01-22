
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


function App() {

  // App.js controls apps all logged checks.
  const [logged, setLogged] = React.useState(sessionStorage.getItem("jwt")!==null)
 

   //Snookers infromation stored here during game
   const [totalBalls, settotalBalls] = React.useState({reds: 15, colors: 6, yellow: true, green: true, brown: true, blue: true, pink: true, black: true })
   const [player1, setPlayer1] = React.useState({id: 1, name: "", points: 0, fouls: 0})
   const [player2, setPlayer2] = React.useState({id: 2, name: "", points: 0, fouls: 0})

   const restartGame = ()=>{
    alert("restart")
   }

  
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
     <Menu logout={Logout} logged={logged} setLogged={setLogged}></Menu>

    {/* <Body with all functionalities */}
    <Routes>
        <Route path="/login"  element={<Login logout={Logout} logged={logged}  setLogged={setLogged}  />}></Route>
        <Route path="/"  element={<Mainpage logout={Logout} logged={logged} setLogged={setLogged}/> }></Route>
        <Route path="/snooker"  element={<Snooker totalBalls={totalBalls} settotalBalls={settotalBalls} player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} restartGame={restartGame}/>}> </Route>
        <Route path="/results"  element={<Results />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
    </Routes>
    {/* //Navigation bar */}
     <BottomNavigation1></BottomNavigation1> 

  </>
    

  );
}

export default App;
