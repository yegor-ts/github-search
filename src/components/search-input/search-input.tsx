import { FC, FormEvent } from "react";
import { octokit } from "../../api/octokit";
import { User } from "../../App";

interface SearchInputProps {
  type: "user" | "repository";
  name: string;
  onHandleName: (username: string) => void;
  onHandleUser?: (user: User) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  type,
  name,
  onHandleName,
  onHandleUser,
}) => {
  const handleFetchUser = (e: FormEvent, username: string) => {
    e.preventDefault();
    octokit.request(`GET /users/${username}`).then(({ data }) => {
      onHandleUser!({
        id: data.id,
        avatar: data.avatar_url,
        username: data.login,
        repos: data.public_repos,
        biography: data.bio,
        email: data.email,
        followers: data.followers,
        following: data.following,
        join_date: data.created_at,
        location: data.location,
      });
    });
  };

  return type === "user" ? (
    <form onSubmit={(e) => handleFetchUser(e, name)}>
      <input
        placeholder="Search for Users"
        value={name}
        onChange={(e) => onHandleName(e.target.value)}
      ></input>
    </form>
  ) : (
    <input
      placeholder="Search for Repositories"
      value={name}
      onChange={(e) => onHandleName(e.target.value)}
    ></input>
  );
};

export default SearchInput;
