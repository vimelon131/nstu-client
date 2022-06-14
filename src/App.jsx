import './styles/app.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './components/header/Header';
import {Outlet} from "react-router-dom";
import Footer from './components/footer/footer';

function App() {
  return (
       <div className="App">
        <Header />
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
