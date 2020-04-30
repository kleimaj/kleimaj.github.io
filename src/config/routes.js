import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Projects from '../Containers/Projects/Projects';
import Freechat from '../Components/Project/Freechat/Freechat';
import Jamr from '../Components/Project/Jamr/Jamr';
import Pikatsume from '../Components/Project/Pikatsume/Pikatsume';
const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/projects' component={ Projects } />
          <Route path='/freechat' component={ Freechat } />
          <Route path='/jamr' component={ Jamr } />
          <Route path='/pikatsume' component={ Pikatsume } />
          <Route path='/aboop' component={ Projects } />
          <Route path='/colab' component={ Projects } />
          <Route path='/ircam' component={ Projects } />

        </Switch>
      );
    }
    
export default Routes;
    