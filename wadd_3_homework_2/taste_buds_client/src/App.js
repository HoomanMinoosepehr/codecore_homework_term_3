import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <div className="main">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
