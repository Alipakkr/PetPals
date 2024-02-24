import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './AllRoutes/MainRoutes';
import {Navbar} from './components/Navbar';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <MainRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
