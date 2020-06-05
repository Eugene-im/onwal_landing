/*******************************************************************************
 * NETTR GROUP CONFIDENTIAL                                                    *
 * ________________________________________________________________________    *
 *                                                                             *
 *  Copyright (C) 2020 Nettr Group                                             *
 *  All Rights Reserved.                                                       *
 *                                                                             *
 * NOTICE:  All information contained herein is, and remains the property      *
 * of Nettr Group and its suppliers, if any.  The intellectual and technical   *
 * concepts contained herein are proprietary to Nettr Group and its            *
 * suppliers, and are protected by trade secret or copyright law.              *
 * Dissemination of this information or reproduction of this material          *
 * is strictly forbidden unless prior written permission is obtained           *
 * from Nettr Group.                                                           *
 ******************************************************************************/
import config from 'config.js';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import 'shared/styles/common.scss';
import Header from '../Header';
import Home from '../../pages/Home';
import MediaAgnostic from '../../pages/MediaAgnostic/index.jsx';
import MultiCast from '../../pages/MultiCast/index.jsx';
import OneHardware from '../../pages/OneHardware/index.jsx';
import OnePlayer from '../../pages/OnePlayer/index.jsx';
import OneProtocol from '../../pages/OneProtocol/index.jsx';
import Packager from '../../pages/Packager/index.jsx';
import Privacy from '../../pages/Privacy/index.jsx';
import RequestTrialModal from '../RequestTrialModal';
import NettrStreamingSDK from '../../pages/NettrStreamingSDK/index.jsx';
import RequestTrialPage from '../../pages/RequestTrialPage/index.jsx';
import LoadingSpinner from './../LoadingSpinner/index.jsx';
import DeveloperAndPrivacyStatement from '../DeveloperAndPrivacystatement';
import Ndrm from '../../pages/NDRM';
import NettrRes from '../../pages/NettrRes';

// import Page404 from '../../pages/404';

class App extends Component {
  history;

  constructor() {
    super();

    this.history = createBrowserHistory();
    this.history.listen(val => {
      if (window.historyPages) {
        if (!window.location.href.includes('#')) {
          window.scroll(0,0);
        }
        window.historyPages.push(val);
      } else {
        window.historyPages = [];
        window.historyPages.push(val);
      }
    });
  }

  componentDidMount() {
    /* clear hash from url */
    const [url, hash] = window.location.href.split('#');
    if (hash) window.location.href = url;

    /* INIT grecaptcha and google analytics  */
    // window.grecaptcha = window.grecaptcha;

    if (window.grecaptcha) {
      window.grecaptcha.ready(function() {
        /* PAGE LOAD event */
        window.grecaptcha
          .execute(config.recaptcha.site_key, { action: 'homepage' })
          .then(function(/* token */) {
            // console.log(token);
          });
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'UA-157962175-1');

    const spinner = document.getElementById('spinner');
    const el = document.createElement('img');
    el.setAttribute('src', 'https://www.nettr.com/static/media/hero-background@2x.3055f249.jpg');
    el.addEventListener('load', () => {
      spinner.classList.add('spinoff');
    });
    el.remove();
  }

  render() {
    return (
      <Router history={this.history}>
        <Switch handler={App}>
          <>
            <LoadingSpinner></LoadingSpinner>
            <RequestTrialModal />
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/one-protocol" component={OneProtocol} />
            <Route exact path="/one-player" component={OnePlayer} />
            <Route exact path="/one-hardware" component={OneHardware} />
            <Route exact path="/media-agnostic" component={MediaAgnostic} />
            <Route exact path="/multi-cast" component={MultiCast} />
            <Route exact path="/packager" component={Packager} />
            <Route exact path="/nettr-streaming-sdk" component={NettrStreamingSDK} />
            <Route exact path="/request-trial" component={RequestTrialPage} />
            <Route exact path="/privacy" component={Privacy} />
            <Route
              exact
              path="/developer-and-privacy-statement"
              component={DeveloperAndPrivacyStatement}
            />
            <Route exact path="/ndrm" component={Ndrm} />
            <Route exact path="/nettrres" component={NettrRes} />
            <Route path="*" component={NotFound} />
            {/*<Route path='*' component={Page404}/>*/}
          </>
        </Switch>
      </Router>
    );
  }
}

const NotFound = ({ location }) => (
  <div style={{ display: 'none' }}>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App;
