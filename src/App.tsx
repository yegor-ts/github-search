import { useState } from "react";
import SearchInput from "./component/search-input/search-input";
import ProfileBar from "./component/profile-bar/profile-bar";

import "./App.css";

export interface User {
  id: number;
  avatar: string;
  username: string;
  repos: number;
}

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const handleGetUsername = (newUsername: string) => setUsername(newUsername);
  const handleGetUser = (user: User) => setUsers([...users, user]);

  return (
    <div className="App">
      <h1>GitHub Searcher</h1>
      <SearchInput
        username={username}
        onHandleUsername={handleGetUsername}
        onHandleUser={handleGetUser}
      />
      {users.map((user) => (
        <ProfileBar
          key={user.id}
          avatar={user.avatar}
          username={user.username}
          repos={user.repos}
        />
      ))}
    </div>
  );
};

export default App;
