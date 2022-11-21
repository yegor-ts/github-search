import { FC, FormEvent } from "react";

interface SearchInputProps {
  username: string;
  onClick: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ username, onClick }) => {
  const handleFetch = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={(e) => handleFetch(e)}>
      <input
        placeholder="Search for Users"
        value={username}
        onChange={(e) => onClick(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchInput;
