// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Loginpage.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Ownerpage from "./Pages/Ownerpage.jsx";
import Navbar from "./components/Navbar.jsx";
import SignupPage from "./Pages/SignupPage";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Aboutpage from "./Pages/Aboutpage.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndServices from "./Pages/TermsAndServices.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndServices" element={<TermsAndServices />} />
        
        
        <Route
          path="/Homepage"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
         <Route path =
          "Loginpage" 
          element={<LoginPage/>}
          />
        <Route
          path="/Ownerpage"
          element={
            <ProtectedRoute>
              <Ownerpage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
