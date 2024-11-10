import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/home/Hero";
import RegistrationForm from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
