import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Biography from "../../components/biography/biography";
import { octokit } from "../../api/octokit";
import { User } from "../../App";
import ResultBar from "../../components/result-bar/result-bar";

interface Repository {
  id: number;
  name: string;
  forks: number;
}

interface ProfileProps {
  users: User[];
}

const Profile: FC<ProfileProps> = ({ users }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const { username } = useParams();
  const user = users.find((user) => user.username === username);

  useEffect(() => {
    octokit
      .request(`GET /users/${username}/repos`)
      .then(({ data }) => setRepos(data));
  }, []);

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
      {repos.map((repo) => (
        <ResultBar
          key={repo.id}
          type="repositories"
          username={username}
          repoName={repo.name}
          forks={repo.forks}
        />
      ))}
    </>
  );
};

export default Profile;
