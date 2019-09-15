import React from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
import CreateHabit from '../containers/CreateHabit';

export default function App() {
  return (
  <>
  <Router>
    <Switch>
      <Route exact path="/" component={withSession(CreateHabit)} />
    </Switch>
  </Router>
  </>
  );
}
