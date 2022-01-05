import React from "react";
import { observer } from "mobx-react-lite";

import User from "./store/userStore";

import ProtectedPages from "./pages";
import Login from "./pages/Login";

const userStore = new User();

// TODO refactor back types
// TODO perfomance barChart and whole application
// TODO bug with chart begins with min not from zero
// TODO define colors for columns in chart
// TODO complete download file for admin
// TODO add more info
// TODO drag and drop for main window
// TODO dark theme and customize chakra theme
// TODO mobile version
// TODO add font to application

const App = (): JSX.Element =>
  userStore.data ? (
    <ProtectedPages userStore={userStore} />
  ) : (
    <Login isLoading={userStore.isLoading} getToken={userStore.getToken} />
  );

export default observer(App);
