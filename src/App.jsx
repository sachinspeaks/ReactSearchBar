import "./App.css";
import SearchBar from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { useState } from "react";

function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResult={setResult} />
        <SearchResults result={result} />
      </div>
    </div>
  );
}

export default App;
