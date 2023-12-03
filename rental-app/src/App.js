import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultsPage from "./components/resultsPage";
import Home from "./components/Home";
import ResortsList from "./components/ResortList";
import Register from './login/Register'
import Login from "./login/Login";
import { useState } from "react";

function App() {
const [currentForm,setCurrentForm]=useState("register");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />}>
            <Route
              path=":city/:checkin_dt/:checkout_dt"
              element={<ResultsPage />}
            />
          </Route>
          <Route path="/api/resorts" element={<ResortsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/**{currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />}*/}
      </div>
    </Router>
  );
}

export default App;
