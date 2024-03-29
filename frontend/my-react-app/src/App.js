import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './AllRoutes/MainRoutes';
import {Navbar} from './components/Navbar';
import { store } from './Redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ChakraProvider>

        <div className="App">
          <Navbar />
          <MainRoutes />
          <Footer/>
        </div>
      </ChakraProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
