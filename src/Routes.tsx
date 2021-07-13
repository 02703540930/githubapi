import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;