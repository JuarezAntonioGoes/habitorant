import { Switch, Route } from "react-router-dom";
import Habits from "../pages/Habits";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddHabit from "../pages/AddHabit";
import EditHabit from "../pages/EditHabit";
import AddGroup from "../pages/AddGroup";
import Groups from "../pages/Groups";
import EditGroup from "../pages/EditGroup";
import GroupActivities from "../pages/GroupActivities";
import AddActivite from "../pages/AddActivite";
import EditActivite from "../pages/EditActivite";
import AddGoal from "../pages/AggGoal";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

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
      <Route exact path="/edit-habit/:id">
        <EditHabit />
      </Route>
      <Route exact path="/add-group">
        <AddGroup />
      </Route>
      <Route exact path="/groups">
        <Groups />
      </Route>
      <Route exact path="/edit-group/:id">
        <EditGroup />
      </Route>
      <Route exact path="/group-activities/:id">
        <GroupActivities />
      </Route>
      <Route exact path="/add-activite">
        <AddActivite />
      </Route>
      <Route exact path="/edit-activite/:id">
        <EditActivite />
      </Route>
      <Route exact path="/add-goal">
        <AddGoal />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
    </Switch>
  );
};

export default Routes;
