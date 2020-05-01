import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Projects from '../Containers/Projects/Projects';
import Freechat from '../Components/Project/Freechat/Freechat';
import Jamr from '../Components/Project/Jamr/Jamr';
import Pikatsume from '../Components/Project/Pikatsume/Pikatsume';
import Colab from '../Components/Project/Colab/Colab';
import Aboop from '../Components/Project/Aboop/Aboop';
import Ircam from '../Components/Project/Ircam/Ircam';
import About from '../Components/About/About';

const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/projects' component={ Projects } />
          <Route path='/freechat' component={ Freechat } />
          <Route path='/jamr' component={ Jamr } />
          <Route path='/pikatsume' component={ Pikatsume } />
          <Route path='/colab' component={ Colab } />
          <Route path='/aboop' component={ Aboop } />
          <Route path='/ircam' component={ Ircam } />
          <Route path='/about' component={ About } />

        </Switch>
      );
    }
    
export default Routes;
    