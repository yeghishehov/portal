import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Works from './pages/works';
import About from './pages/about';
import Service from './pages/service';
import PageNotFound from './pages/pageNotFound';
import ROUTES from './utils/routes.constants';

export default () => (
  <Switch>
    <Route exact path={ROUTES.home} component={Home} />
    <Route path={ROUTES.works} component={Works} />
    <Route path={ROUTES.about} component={About} />
    <Route path={ROUTES.service} component={Service} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
