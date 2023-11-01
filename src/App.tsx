import "./App.scss";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Error403, Error404 } from "./component";
import { useBeforeRender } from "./component/Error";
import ForgetPass from "./screens/ForgetPassword";
import Homepage from "./screens/Homepage";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import SearchProject from "./screens/SearchProject";
import LayoutCustom from "./layout";
import LayoutCustom2 from "./layout2";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  const token = useSelector<any>((state) => state.user.token);
  useBeforeRender(() => {
    window.addEventListener("error", (e) => {
      if (e) {
        const resizeObserverErrDiv = document.getElementById("webpack-dev-server-client-overlay-div");
        const resizeObserverErr = document.getElementById("webpack-dev-server-client-overlay");
        if (resizeObserverErr) resizeObserverErr.className = "hide-resize-observer";
        if (resizeObserverErrDiv) resizeObserverErrDiv.className = "hide-resize-observer";
      }
    });
  }, []);

  return (
    <div id="root">
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/forgetPassword" Component={ForgetPass} />
          <Route element={<LayoutCustom2 />}>
            <Route path="/dashboard" Component={Dashboard} />
          </Route>
          <Route element={<LayoutCustom />}>
            <Route path="/" Component={Homepage} />
            <Route path="/searchproject/:name" Component={SearchProject} />
            {token ? <></> : <Route path="/" element={<Error403 />} />}
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
