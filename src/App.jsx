import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RentalPage from "./pages/RentalPage";
import PropertyDetails from "./Pages/PropertyDetails";
import StudentLogin from "./Pages/StudentLogin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RentalPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
