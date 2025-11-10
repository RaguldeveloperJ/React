// import logo from './logo.svg';
import './App.css';
import Anchors from "./components/Anchors"
import Approuter from './components/Approuter';
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
