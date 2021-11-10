
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Bikes from './Pages/Home/Bikes/Bikes';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Explore from './Pages/Explore/Explore/Explore';
import PlaceOrder from './Pages/Explore/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
        <Switch>
            <Route path="/about">
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
            <Route exact path="/placeOrder">
              <PlaceOrder/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
