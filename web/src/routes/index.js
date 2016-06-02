import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import Login from '../components/user/login';
const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/actived" component={App} />
    <Route path="/completed" component={App} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
