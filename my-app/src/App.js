import "./App.css";
import NavB from "./Components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavB />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
