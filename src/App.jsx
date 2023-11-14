import React, { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import AddMovie from "./Components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail";
import { createContext } from "react";
import Loginn from "./Components/Loginn";
import SignnUp from "./Components/SignnUp";
import Signout from './Components/Signout'

const Appstate = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("Hira");
  return (
    <Appstate.Provider value={{ login, username, setLogin, setUsername }}>
      <div className="relatives">
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="addmovie" element={<AddMovie />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="loginn" element={<Loginn/>}/>
          <Route path="SignnUp" element={<SignnUp/>}/>
          <Route path="Signout" element={<Signout/>}/>
        </Routes>
      </div>
    </Appstate.Provider>
  )
}

export default App;
export { Appstate };
