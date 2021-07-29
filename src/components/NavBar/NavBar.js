import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  function handleLoginClick() {
    history.push("/Login");
    window.location.reload(); 
}

  return (
    <div >
      <ul className="navigation">
        <li><Link to="/Main/Welcome">Welcome</Link></li>
        <li><Link to="/Main/Events">Events</Link></li>
        <li ><Link onClick={handleLoginClick}>Log Out</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;