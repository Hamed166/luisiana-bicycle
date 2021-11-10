
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Bikes from './Pages/Home/Bikes/Bikes';
import Explore from './Pages/Explore/Explore/Explore';
import PlaceOrder from './Pages/Explore/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
        <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/bikes">
              <Bikes />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/placeOrder">
              <PlaceOrder/>
            </Route>
           
          </Switch>
      </Router>
    </div>
  );
}

export default App;
