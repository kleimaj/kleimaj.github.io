import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Projects from '../Containers/Projects/Projects';
const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/projects' component={ Projects } />
        </Switch>
      );
    }
    
export default Routes;
    