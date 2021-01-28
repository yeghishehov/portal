import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import PageNotFound from './pages/pageNotFound';
import ROUTES from './utils/routes.constants';

export default () => (
  <Switch>
    <Route exact path={ROUTES.home} component={Home} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
