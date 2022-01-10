
import './App.css';
import React from 'react';
import Menu from './Components/Menu';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Footer from './Components/Footer';
import Mainpage from './Components/Mainpage';

function App() {

  // App.js controls apps all logged checks.
  const [logged, setLogged] = React.useState(sessionStorage.getItem("jwt")!==null)

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
        <Route path="/"  element={<Mainpage logout={Logout} logged={logged} setLogged={setLogged}/>}></Route>
    </Routes>
    {/* //<footer with credentials */}
    <Footer></Footer>

  </>
    

  );
}

export default App;
