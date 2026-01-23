import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Modeles from "./pages/Modeles";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/modeles" element={<Modeles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
