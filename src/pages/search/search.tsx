import { FC, useState } from "react";
import SearchInput from "../../components/search-input/search-input";
import ResultBar from "../../components/result-bar/result-bar";
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
        <ResultBar
          key={user.id}
          type="users"
          avatar={user.avatar}
          username={user.username}
          repos={user.repos}
        />
      ))}
    </>
  );
};

export default Search;
