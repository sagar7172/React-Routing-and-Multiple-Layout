import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './webpages/About';
import Project from './webpages/Project';
import HomePage from './webpages/HomePage';
import ErrorPage from './webpages/ErrorPage';
import Login from './webpages/Login';
import Blank from './components/layout/Blank';
import FullLayout from './components/layout/FullLayout';
import Profile from './webpages/Profile';

const RoutePages = [
  //login page && blank layout
  {
    exact: true,
    path: '/',
    Component: Login,
    Layout: Blank
  },
  {
    exact: true,
    path: '/login',
    Component: Login,
    Layout: Blank
  },
  {
    exact: true,
    path: '/home',
    Component: HomePage,
    Layout: FullLayout
  },
  {
    exact: true,
    path: '/about',
    Component: About,
    Layout: FullLayout
  },
  {
    exact: true,
    path: '/project',
    Component: Project,
    Layout: FullLayout
  },
  {
    exact: true,
    path: '/profile',
    Component: Profile,
    Layout: FullLayout
  },
  {
    exact: true,
    path: '*',
    Component: ErrorPage,
    Layout: FullLayout
  }
]

function App() {
  console.log(RoutePages);
  return (
    <div className="App">
      <Router>
          <Switch>
            {
              RoutePages.map((item, key) => {
                return <Route key={key} exact={item.exact}
                path={item.path}
                render={props => ( 
                <item.Layout>
                  <item.Component {...props} />
                </item.Layout> 
                )}
                
                 />
              })
            }

            {/* <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/project" exact component={Project} />
            <Route path="/login" exact component={Login} />
            <Route path="*" exact component={ErrorPage} /> */}
  
          </Switch>
      </Router>
    </div>
  );
}

export default App;
