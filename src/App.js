import Header from "./components/Home/Header/Header";
import Home from "./components/Home/HomeBody/HomeBody";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails/PokemonDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Home />
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;