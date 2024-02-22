import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './AllRoutes/MainRoutes';
import NavBar from './components/nvabar';
import Home from './Pages/Home';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainRoutes />
          <NavBar />
          <Home />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
