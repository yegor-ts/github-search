import { FC, useState } from "react";
import SearchInput from "../../components/search-input/search-input";
import ResultItem from "../../components/result-item/result-item";
import { User } from "../../shared/interfaces/user.interface";

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
        type="user"
        name={username}
        onHandleName={handleGetUsername}
        onHandleUser={onHandleUser}
      />
      {users.map((user) => (
        <ResultItem
          key={user.id}
          type="users"
          avatar={user.avatar_url}
          username={user.login}
          repos={user.public_repos}
        />
      ))}
    </>
  );
};

export default Search;
