import { FC } from "react";
import { User } from "../../pages/search/search";

import styles from "./profile-bar.module.css";

const ProfileBar: FC<Omit<User, "id">> = ({ avatar, username, repos }) => {
  return (
    <div className={styles.bar}>
      <img className={styles.bar_avatar} src={avatar} alt={username} />
      <span>{username}</span>
      <span>Repo: {repos}</span>
    </div>
  );
};

export default ProfileBar;
