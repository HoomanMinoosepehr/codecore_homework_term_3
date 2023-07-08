import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="main">
      <Navbar/>
      {/* <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes> */}
      <Home/>
    </div>
  );
}

export default App;
