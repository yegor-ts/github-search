import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";
import { User } from "./shared/interfaces/user.interface";

import styles from "./App.module.css";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleGetUser = (user: User) => {
    const idx = users.findIndex((u) => u.id === user.id);

    if (idx === -1) {
      setUsers([...users, user]);
    } else {
      alert("This user is already in the list");
    }
  };

  return (
    <div className={styles.App}>
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
