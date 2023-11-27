import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ setResult }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("pehli baar ka data ", data);
      });
  }, []);

  const fetchdata = (value) => {
    const result = data.filter((user) => {
      return (
        value.length &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResult(result);
  };

  const handleChange = (value) => {
    setSearchTerm(value);
    fetchdata(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
