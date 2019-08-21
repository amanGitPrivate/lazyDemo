import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Users = React.lazy(() => import('./Users'));


function AppRouter() {
  return (
    <div>
    <React.Suspense fallback={<span>Loading...</span>}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        </div>
    </Router>
    </React.Suspense>
    </div>
  );
}

export default AppRouter;