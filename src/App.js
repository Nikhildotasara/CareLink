import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing components
import Navbar from "./components/navbar/navbar.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";
import HireDoctor from "./components/hireDoctor/hireDoctor.jsx";

import HireAccountant from "./components/hireAccountant/hireAccountant.jsx";

import DoctorStats from "./components/doctorStats/doctorStats.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mainContainer">
          <Sidebar />

          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route path="/hireDoctor" element={<HireDoctor />} />
            <Route path="/hireAccountant" element={<HireAccountant />} />
            <Route path="/doctorStats" element={<DoctorStats />} />
          </Routes>
          {/* <MainPage /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
