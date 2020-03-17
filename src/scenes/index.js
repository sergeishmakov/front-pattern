import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ScreenSpinner } from '../components/ScreenSpinner';

const Home = lazy(() => import('./Home'));

export default function App() {
  return (
    <Suspense fallback={<ScreenSpinner />}>
      <Router>
        <Switch>
          <Route exect path="/" component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}
