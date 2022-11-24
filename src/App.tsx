import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";

import "./App.css";

export interface User {
  id: number;
  avatar: string;
  username: string;
  repos: number;
  email: string;
  location: string;
  join_date: string;
  followers: number;
  following: number;
  biography: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleGetUser = (user: User) => setUsers([...users, user]);

  return (
    <div className="App">
      <h1>GitHub Searcher</h1>
      <Routes>
        <Route
          path="/"
          element={<Search users={users} onHandleUser={handleGetUser} />}
        />
        <Route path="/profile/:username" element={<Profile users={users} />} />
      </Routes>
    </div>
  );
};

export default App;
