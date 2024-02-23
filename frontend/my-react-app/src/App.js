import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './AllRoutes/MainRoutes';

import Home from './Pages/Home';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>
        <MainRoutes/>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
