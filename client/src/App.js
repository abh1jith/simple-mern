import React from "react";
import { Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Welcome from "./components/Welcome";



function App() {

  return (
    <div class="container">

      <Navbar />      
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/get" element={<UserList />} />

        <Route path="/get/:id" element={<UserList />} />

      </Routes>
    </div>
  );
}

export default App;