import React from "react";
import "./SearchRes.css";

export default function SearchRes({ result }) {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`you clicked on ${result.name} `)}
    >
      {result.name}
    </div>
  );
}
