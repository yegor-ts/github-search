import { FC } from "react";

import styles from "./biography.module.css";

interface BiographyProps {
  avatar: string;
  username: string;
  email: string;
  location: string;
  join_date: string;
  followers: number;
  following: number;
  biography: string;
}

const Biography: FC<BiographyProps> = ({
  avatar,
  username,
  email,
  location,
  join_date,
  followers,
  following,
  biography,
}) => {
  return (
    <div className={styles.profile_card}>
      <div className={styles.biography}>
        <img className={styles.avatar} src={avatar} alt={username} />
        <div>
          <p>{username}</p>
          <p>{email}</p>
          <p>{location}</p>
          <p>{join_date}</p>
          <p>{followers} Followers</p>
          <p>Following {following}</p>
        </div>
      </div>
      <p>{biography}</p>
    </div>
  );
};

export default Biography;
