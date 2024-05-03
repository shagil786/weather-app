import logo from "./logo.svg";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
