// import logo from './logo.svg'; 
import './App.css';
import Anchors from "./components/Anchors"
import Approuter from './components/Approuter';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <HashRouter>
        <Anchors />
        <Approuter />
      </HashRouter>
    </>

  );
}

export default App;
