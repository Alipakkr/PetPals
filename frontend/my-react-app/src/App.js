import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './AllRoutes/MainRoutes';
import NavBar from './components/nvabar';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRoutes/>
        <NavBar/>
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
