import React from "react";
import DashBoard from "./components/DashBoard";
import Profile from "./components/profile";
import HigherOrderFunction from "./Hoc/HigherOrderFunction";

function App() {
  //If is auth is true then only we will be showing the compo else we show no access
  const AuthorizedDashboard = HigherOrderFunction(DashBoard, false);
  const AuthorizedProfile = HigherOrderFunction(Profile, true);
  return (
    <>
      <input type="text" />
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>
        I am targeting center
      </h1>
      <AuthorizedDashboard />
      <AuthorizedProfile />
    </>
  );
}

export default App;
