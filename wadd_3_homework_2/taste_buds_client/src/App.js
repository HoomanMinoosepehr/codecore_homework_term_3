import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import { SignUp } from "./components/SignUp";
import SignInPage from "./components/SignInPage";
import { Sessions, User } from "./request";
import { useState } from "react";

function App() {
  const [ user, setUser] = useState(null);
  const [ aler, setAlert ] = useState({})

  const getCurrentUser = () => {
    User.current()
          .then( data => {
            setUser(data.first_name)
          })
  };

  const signOut = () =>{
    Sessions.destroy()
              .then(data => {
                setUser(null)
              })
  };

  return (
    <div className="main">
      <Navbar user={user} onSignOut={signOut}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        <Route exact path="/sign-in" element={<SignInPage onSignIn={getCurrentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
