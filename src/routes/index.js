import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import IntroPage from '../Pages/IntroPage/introPage';
import GamePlayPage from '../Pages/GamePlayPage/gamePlayPage';
import GameOverPage from '../Pages/GameOverPage/gameOverPage';
import ScoresheetPage from '../Pages/ScoresheetPage/scoresheetPage';

const routes = (props) => {

  return (
    <BrowserRouter className=".app-bar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">KST</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/game-play-page">GTW Game</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/scoresheet-page">Scoresheet</NavLink></li>
            </ul>
          </div>
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
