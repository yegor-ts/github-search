import { FC } from "react";
import { useParams } from "react-router-dom";
import Biography from "../../components/biography/biography";
import { User } from "../../App";

interface ProfileProps {
  users: User[];
}

const Profile: FC<ProfileProps> = ({ users }) => {
  const { username } = useParams();
  const user = users.find((user) => user.username === username);

  return (
    <>
      <Biography
        avatar={user!.avatar}
        biography={user!.biography}
        email={user!.email}
        followers={user!.followers}
        following={user!.following}
        join_date={user!.join_date}
        location={user!.location}
        username={user!.username}
      />
    </>
  );
};

export default Profile;
