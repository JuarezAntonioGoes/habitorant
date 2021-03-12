import { Switch, Route } from "react-router-dom";
import Habits from "../pages/Habits";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddHabit from "../pages/AddHabit";
import EditHabit from "../pages/EditHabit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/add-habit">
        <AddHabit />
      </Route>
      <Route exact path="/habits">
        <Habits />
      </Route>
      <Route exact path="/edit-habit">
        <EditHabit />
      </Route>
    </Switch>
  );
};

export default Routes;
