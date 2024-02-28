import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import AddHabit from "./pages/AddHabit";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-between">
        <h1>HabitForge</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Add new Habit</Link>
        {/* <Link to="/addhabit">Create New Habit</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
