import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="bg-black min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
  );
}
