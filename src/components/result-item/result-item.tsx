import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./result-item.module.css";

interface ResultItemProps {
  type: "repositories" | "users";
  avatar?: string;
  username?: string;
  repos?: number;
  repoName?: string;
  forks?: number;
}

const ResultItem: FC<ResultItemProps> = ({
  type,
  avatar,
  username,
  repos,
  repoName,
  forks,
}) => {
  return type === "users" ? (
    <div className={styles.resultItem}>
      <img className={styles.resultItem_avatar} src={avatar} alt={username} />
      <Link to={`/profile/${username}`}>
        <p>{username}</p>
      </Link>
      <p>Repo: {repos}</p>
    </div>
  ) : (
    <div className={styles.resultItem}>
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

export default ResultItem;
