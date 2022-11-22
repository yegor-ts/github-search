import { FC } from "react";
import { User } from "../../pages/search/search";

import styles from "./profile-bar.module.css";

type ProfileBarProps = Omit<User, "id">;

const ProfileBar: FC<ProfileBarProps> = ({ avatar, username, repos }) => {
  return (
    <div className={styles.bar}>
      <img className={styles.bar_avatar} src={avatar} alt={username} />
      <span>{username}</span>
      <span>Repo: {repos}</span>
    </div>
  );
};

export default ProfileBar;
