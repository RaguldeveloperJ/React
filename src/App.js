// import logo from './logo.svg';
import './App.css';
import Anchors from "./Anchors"
import Approuter from './Approuter';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Anchors />
        <Approuter />
      </BrowserRouter>


    </>

  );
}

export default App;
