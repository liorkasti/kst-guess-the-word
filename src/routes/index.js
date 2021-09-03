import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import IntroPage from '../Pages/IntroPage/introPage';
import GamePlayPage from '../Pages/GamePlayPage/gamePlayPage';
import GameOverPage from '../Pages/GameOverPage/gameOverPage';
import ScoresheetPage from '../Pages/ScoresheetPage/scoresheetPage';

const routes = (props) => {
  console.log('props: ', props)

  return (
    <BrowserRouter className="routes-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <Link to="/">{props.siteName}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/game-play-page">Game</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/scoresheet-page">Scoresheet</NavLink></li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/game-play-page" exact component={GamePlayPage} />
        <Route path="/game-over-page" exact component={GameOverPage} />
        <Route path="/scoresheet-page" exact component={ScoresheetPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
