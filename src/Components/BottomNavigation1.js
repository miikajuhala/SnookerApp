
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowBack, ArrowForward, Home,  Settings } from '@mui/icons-material';



export default function BottomNavigation1() {
 
  let navigate = useNavigate();
  const location = useLocation();
  
  const [value, setValue] = React.useState("/");
  
  
  return (
    <Box  sx={{ width: 1 }}>
      <BottomNavigation className="backround"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          if (newValue==="back"){
            navigate(-1)
            setValue(newValue)
            }
          if (newValue==="forward"){
          navigate(+1)
          setValue(newValue)
          }
          else{
            setValue(newValue)
            navigate(newValue);
          }
        }}
      >
        <BottomNavigationAction label="" value={"back"} icon={<ArrowBack className="backround"/>} />
        <BottomNavigationAction label="Start" value={"/"} icon={<Home />} />
        <BottomNavigationAction label="" value={"forward"} icon={<ArrowForward />} /> 
      </BottomNavigation>
    </Box>
  );
}