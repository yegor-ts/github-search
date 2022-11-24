import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./result-bar.module.css";

interface ResultBarProps {
  type: "repositories" | "users";
  avatar?: string;
  username?: string;
  repos?: number;
  repoName?: string;
  forks?: number;
}

const ResultBar: FC<ResultBarProps> = ({
  type,
  avatar,
  username,
  repos,
  repoName,
  forks,
}) => {
  return type === "users" ? (
    <div className={styles.bar}>
      <img className={styles.bar_avatar} src={avatar} alt={username} />
      <Link to={`/profile/${username}`}>
        <p>{username}</p>
      </Link>
      <p>Repo: {repos}</p>
    </div>
  ) : (
    <div className={styles.bar}>
      <a
        href={`https://github.com/${username}/${repoName}`}
        target="_blank"
        rel="noreferrer"
      >
        <p>{repoName}</p>
      </a>
      <p>{forks} Forks</p>
    </div>
  );
};

export default ResultBar;
