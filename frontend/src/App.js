import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import HomePage from "./Pages/HomePage/HomePage";
import MapPage from "./Pages/MapPage/MapPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import BusinessProfilePage from "./Pages/BusinessProfilePage/BusinessProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/businessprofile" element={<BusinessProfilePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
