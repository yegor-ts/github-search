import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { octokit } from "../../api/octokit";
import { User } from "../../App";

const Profile = () => {
  const [userProfile, setUserProfile] = useState<User>();
  const { username } = useParams();

  useEffect(() => {
    octokit.request(`GET /users/${username}`).then(({ data }) => {
      setUserProfile({
        id: data.id,
        avatar: data.avatar_url,
        username: data.login,
        repos: data.public_repos,
      });
    });
  }, [username]);

  return (
    <>
      <h1>Profile Page</h1>
      <ul>
        <li>{userProfile?.username}</li>
        <li>{userProfile?.repos}</li>
        <li>{userProfile?.id}</li>
      </ul>
    </>
  );
};

export default Profile;
