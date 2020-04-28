import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';

const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>
      );
    }
    
export default Routes;
    