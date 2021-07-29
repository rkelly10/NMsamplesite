import React from "react";


import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from "../../services/mainRoutes";

const Main = props => {

  return (
      <Router>
      <MainRoutes />
    </Router>
  );
};

export default Main;

