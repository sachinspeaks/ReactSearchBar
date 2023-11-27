import React from "react";
import "./SearchResults.css";
import SearchRes from "./SearchRes";

export const SearchResults = ({ result }) => {
  return (
    <div className="result-list">
      {result.map((user, id) => {
        return <SearchRes key={id} result={user} />;
      })}
    </div>
  );
};
