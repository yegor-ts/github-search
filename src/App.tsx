import { useState } from "react";
import SearchInput from "./component/search-input/search-input";

import "./App.css";

const App = () => {
  const [username, setUsername] = useState<string>("");

  const handleGetUsername = (newUsername: string) => setUsername(newUsername);

  return (
    <div className="App">
      <h1>GitHub Searcher</h1>
      <SearchInput username={username} onClick={handleGetUsername} />
    </div>
  );
};

export default App;
