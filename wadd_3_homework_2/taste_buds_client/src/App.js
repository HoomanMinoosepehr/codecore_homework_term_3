import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { SignUp } from "./components/SignUp";
import SignInPage from "./components/SignInPage";
import { Sessions, User } from "./request";
import { useState } from "react";
import { RecipeIndex } from "./components/RecipeIndex";
import { AuthRoute } from "./components/AuthRoute";
import { RecipeNewPage } from "./components/RecipeNewPage";
import { RecipeShowPage } from "./components/RecipeShowPage";

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
    <div className="flex flex-col items-center h-screen w-screen">
      <Navbar user={user} onSignOut={signOut}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/recipes" element={<RecipeIndex/>}/>
        <Route path="/recipes/:id" element={<RecipeShowPage/>}/>
        <Route exact path="/recipes/new" element={<AuthRoute isAuth={!!user} page={<RecipeNewPage/>}/>}/>
        <Route exact path="/sign-up" element={<SignUp onSignIn={getCurrentUser}/>}/>
        <Route exact path="/sign-in" element={<SignInPage onSignIn={getCurrentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
