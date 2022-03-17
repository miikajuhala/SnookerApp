
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';



const tabs = [{
  route: "/",
  icon: faHome,
  label: "Home"
},{
  route: "/snooker",
  icon: faSearch,
  label: "Snooker"
},{
  route: "/results",
  icon: faUserCircle,
  label: "Results"
  
}]



export default function BottomNavigation1() {
 
  
  return (
  <>
    {/* Bottom Tab Navigator*/}
    <nav className="navbar fixed-bottom navbar-light bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon color='rgb(113, 118, 119)' size="sm" icon={tab.icon}/>
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
    </>
  )
};
