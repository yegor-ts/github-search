import { FC, useState } from "react";
import SearchInput from "../../components/search-input/search-input";
import ProfileBar from "../../components/profile-bar/profile-bar";
import { User } from "../../App";

interface SearchProps {
  users: User[];
  onHandleUser: (data: User) => void;
}

const Search: FC<SearchProps> = ({ users, onHandleUser }) => {
  const [username, setUsername] = useState<string>("");

  const handleGetUsername = (newUsername: string) => setUsername(newUsername);

  return (
    <>
      <SearchInput
        username={username}
        onHandleUsername={handleGetUsername}
        onHandleUser={onHandleUser}
      />
      {users.map((user) => (
        <ProfileBar
          key={user.id}
          avatar={user.avatar}
          username={user.username}
          repos={user.repos}
        />
      ))}
    </>
  );
};

export default Search;
