import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
    <Router>
      

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Header />
          <Login />
        </Route>

         
      
      </Switch>
    </Router>

  </div>
  );
}

export default App;
