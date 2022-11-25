import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Biography from "../../components/biography/biography";
import ResultBar from "../../components/result-bar/result-bar";
import SearchInput from "../../components/search-input/search-input";
import { octokit } from "../../api/octokit";
import { User } from "../../App";

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
  const [repoName, setRepoName] = useState<string>("");

  const { username } = useParams();
  const user = users.find((user) => user.username === username);

  const handleGetRepoName = (newRepoName: string) => setRepoName(newRepoName);

  const repo = repos.find((repo) => repo.name === repoName);

  useEffect(() => {
    octokit
      .request(`GET /users/${username}/repos`)
      .then(({ data }) => setRepos(data));
  }, [username]);

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
      <SearchInput
        type="repository"
        name={repoName}
        onHandleName={handleGetRepoName}
      />
      {repo ? (
        <ResultBar
          type="repositories"
          username={username}
          repoName={repo?.name}
          forks={repo?.forks}
        />
      ) : (
        repos.map((repo) => (
          <ResultBar
            key={repo.id}
            type="repositories"
            username={username}
            repoName={repo.name}
            forks={repo.forks}
          />
        ))
      )}
    </>
  );
};

export default Profile;
