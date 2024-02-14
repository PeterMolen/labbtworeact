import react from 'react' // importerar react
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // kommer ifrån errors, ser till att vi ligger inåt i appen och inte hoppa upp i rooten
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import ELIT from "./pages/ELIT";
import Portfolio from "./pages/Portfolio";
import './App.css';

export default function App() {
  return (
    <Router>
    <div className="site-container">
      <header className="site-header">
        <Menu/>
      </header>
      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/CV" element={<CV/>}/>
          <Route path="/ELIT" element={<ELIT/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
        </Routes>
      </main>
      <footer className="site-footer">
        <Footer/>
      </footer>
    </div>
    </Router>    
  );
}