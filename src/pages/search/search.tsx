import { useState } from "react";
import SearchInput from "../../components/search-input/search-input";
import ProfileBar from "../../components/profile-bar/profile-bar";

export interface User {
  id: number;
  avatar: string;
  username: string;
  repos: number;
}

const Search = () => {
  const [username, setUsername] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const handleGetUsername = (newUsername: string) => setUsername(newUsername);
  const handleGetUser = (user: User) => setUsers([...users, user]);

  return (
    <>
      <SearchInput
        username={username}
        onHandleUsername={handleGetUsername}
        onHandleUser={handleGetUser}
      />
      {users.map((user) => (
        <ProfileBar
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          username={user.username}
          repos={user.repos}
        />
      ))}
    </>
  );
};

export default Search;
