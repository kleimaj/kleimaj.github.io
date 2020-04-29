import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Projects from '../Containers/Projects/Projects';
const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/projects' component={ Projects } />
          <Route path='/freechat' component={ Projects } />
          <Route path='/pikatsume' component={ Projects } />
          <Route path='/jamr' component={ Projects } />
          <Route path='/aboop' component={ Projects } />
          <Route path='/colab' component={ Projects } />
          <Route path='/ircam' component={ Projects } />

        </Switch>
      );
    }
    
export default Routes;
    