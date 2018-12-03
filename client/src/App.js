import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './utils/auth';
import SignUpHero from './components/SignInPage/SignUpHero/SignUpHero';
import CharitySignUpHero from './components/SignInPage/CharitySignUpHero/CharitySignUpHero';
import CharityMissionHero from './components/SignInPage/CharityMissionHero/CharityMissionHero';
import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';
import CharityEvent from './components/SignInPage/CharityEventPage';
import InterestSelectionHero from './components/SignInPage/SignUpHero/InterestSelectionHero';
import NoMatch from './components/Nav/NoMatch';
import LatestEventsFeedPage from './components/LatestEventsFeed/LatestEventsFeedPage';


class App extends Component {
  render () {

    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={FullScreenHero} />
            <Route exact path="/signin" component={Auth(SignInHero,false)}/>
            <Route exact path="/signup" component={Auth(SignUpHero,false)} />
            <Route exact path="/charitysignup" component={CharitySignUpHero} />
            <Route exact path="/moreinfo" component={LatestEventsFeedPage} />
            <Route exact path="/eventfeed" component={EventFeedPage} />
            <Route  exact path="/charityevent" component={CharityEvent} />
            {/* <Route  exact path="/interests" component={InterestSelectionHero} /> */}
            <Route component={NoMatch} />


          </Switch>

        </div>

      </Router>

)};

};

export default App;
