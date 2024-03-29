import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import Projects from "../Containers/Projects/Projects";
import Aiden from "../Components/Project/Aiden/Aiden";
import Potty from "../Components/Project/Potty/Potty";
import Freechat from "../Components/Project/Freechat/Freechat";
import Jamr from "../Components/Project/Jamr/Jamr";
import Pikatsume from "../Components/Project/Pikatsume/Pikatsume";
import Colab from "../Components/Project/Colab/Colab";
import Aboop from "../Components/Project/Aboop/Aboop";
import Ircam from "../Components/Project/Ircam/Ircam";
import About from "../Components/About/About";
import Misc from "../Components/Misc/Misc";
const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/aiden" component={Aiden} />
      <Route path="/potty-angel" component={Potty} />
      <Route path="/freechat" component={Freechat} />
      <Route path="/jamr" component={Jamr} />
      <Route path="/pikatsume" component={Pikatsume} />
      <Route path="/colab" component={Colab} />
      <Route path="/aboop" component={Aboop} />
      <Route path="/ircam" component={Ircam} />
      <Route path="/about" component={About} />
      <Route path="/misc" component={Misc} />
      <Route path="*" component={Home} />
    </Switch>
  );
};

export default Routes;
