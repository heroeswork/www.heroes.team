import React from "react";
import {Helmet} from "react-helmet";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-nunito';
import 'typeface-open-sans';

// pages for this site
import LandingPage from "./LandingPage/LandingPage.jsx";

let hist = createMemoryHistory();

class App extends React.Component {
  componentDidMount () {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "cc8dca6c-1c5c-4505-a126-3cb1e3462a36";
    (function() {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }

  render () {
    return (
      <div>
        <Helmet
          title="bettering our systems of care, together."
          titleTemplate="heroes - %s"
          defaultTitle="bettering our systems of care, together."
          meta={[
            {name: "description", content: "Heroes Initiative is working with agencies to solve challenges and improve family outcomes, by using the rich and varied experiences of on-the-ground experts to guide development of tools, content, and services"},
          ]}
          link={[
            {rel: "canonical", href: "http://www.heroes.team"},
          ]}
          />
          <Router history={hist}>
            <Switch>
              <Route path="/" component={LandingPage} />
            </Switch>
          </Router>
      </div>
      )
  }
}
export default App
