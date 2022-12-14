import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Biography from "../../components/biography/biography";
import ResultItem from "../../components/result-item/result-item";
import SearchInput from "../../components/search-input/search-input";
import { octokit } from "../../api/octokit";
import { User } from "../../shared/interfaces/user.interface";
import { Repository } from "../../shared/interfaces/repository.interface";

interface ProfileProps {
  users: User[];
}

const Profile: FC<ProfileProps> = ({ users }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [repoName, setRepoName] = useState<string>("");

  const { username } = useParams();
  const user = users.find((user) => user.login === username);

  const handleGetRepoName = (newRepoName: string) => setRepoName(newRepoName);

  const repo = repos.find((repo) => repo.name === repoName);

  useEffect(() => {
    octokit
      .request(`GET /users/${username}/repos`)
      .then(({ data }: { data: Repository[] }) => setRepos(data));
  }, [username]);

  return (
    <>
      <Biography
        avatar={user!.avatar_url}
        biography={user!.bio}
        email={user!.email}
        followers={user!.followers}
        following={user!.following}
        join_date={user!.created_at}
        location={user!.location}
        username={user!.login}
      />
      <SearchInput
        type="repository"
        name={repoName}
        onHandleName={handleGetRepoName}
      />
      {repo ? (
        <ResultItem
          type="repositories"
          username={username}
          repoName={repo?.name}
          forks={repo?.forks}
        />
      ) : (
        repos.map((repo) => (
          <ResultItem
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
