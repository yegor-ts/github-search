import { FC, FormEvent } from "react";
import { octokit } from "../../api/octokit";
import { User } from "../../pages/search/search";

interface SearchInputProps {
  username: string;
  onHandleUsername: (username: string) => void;
  onHandleUser: (user: User) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  username,
  onHandleUsername,
  onHandleUser,
}) => {
  const handleFetchUser = (e: FormEvent, username: string) => {
    e.preventDefault();
    octokit.request(`GET /users/${username}`).then(({ data }) => {
      onHandleUser({
        id: data.id,
        avatar: data.avatar_url,
        username: data.login,
        repos: data.public_repos,
      });
    });
  };

  return (
    <form onSubmit={(e) => handleFetchUser(e, username)}>
      <input
        placeholder="Search for Users"
        value={username}
        onChange={(e) => onHandleUsername(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchInput;
