import { Routes, Route } from "react-router-dom";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>GitHub Searcher</h1>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
