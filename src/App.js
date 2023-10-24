import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

// Switch is changed to Routes

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" excat Component={Home} />
          <Route path="/services" excat Component={Services} />
          <Route path="/products" excat Component={Products} />
          <Route path="/sign-up" excat Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
