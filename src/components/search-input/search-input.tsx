import { FC, FormEvent } from "react";
import { octokit } from "../../api/octokit";
import { User } from "../../shared/interfaces/user.interface";

import styles from "./search-input.module.css";

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
    octokit
      .request(`GET /users/${username}`)
      .then(({ data }: { data: User }) => {
        onHandleUser!({
          id: data.id,
          avatar_url: data.avatar_url,
          login: data.login,
          public_repos: data.public_repos,
          bio: data.bio,
          email: data.email,
          followers: data.followers,
          following: data.following,
          created_at: data.created_at,
          location: data.location,
        });
      })
      .catch((err) => alert("User not found"));
  };

  return type === "user" ? (
    <form onSubmit={(e) => handleFetchUser(e, name)}>
      <input
        placeholder="Search for Users"
        value={name}
        onChange={(e) => onHandleName(e.target.value)}
        className={styles.searchInput}
      ></input>
    </form>
  ) : (
    <input
      placeholder="Search for Repositories"
      value={name}
      onChange={(e) => onHandleName(e.target.value)}
      className={styles.searchInput}
    ></input>
  );
};

export default SearchInput;
