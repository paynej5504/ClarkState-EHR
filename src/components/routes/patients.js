// import statements
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home'
import DailyCare from '../pages/Daily-Care'
import AdminDash from '../pages/admin-dash'
import Med from '../pages/med-data';

const patientRoutes = () => (
    <Switch>
      {/* Routes */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/daily-care" component={DailyCare}/>
      <Route exact path="/admin-dash" component={AdminDash}/>
      <Route exact path="/med-data" component={Med}/>
    </Switch>
);

// export statements
export default patientRoutes;