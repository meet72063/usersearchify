import React, { useState } from "react";
import "./searchbar.css";
import { CiSearch } from "../../icons";

const SearchBar = ({ fetchUser, setUsersList, searchFilters }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const currentSearchTerm = e.target.value;

    setSearchTerm(currentSearchTerm);

    // If the search field is empty, show all users
    if (!currentSearchTerm) {
      setUsersList(fetchUser);
      return;
    }

    // Filter users through partial search terms via specified filters
    const filteredUsers = fetchUser.filter((user) => {
      // Creating a case-insensitive regular expression for matching
      let regex = new RegExp(searchTerm, "i");
      return searchFilters.some((filter) =>
        regex.test(user[filter].toLowerCase())
      );
    });

    // Setting the user list to display filtered results
    setUsersList(filteredUsers);
  };

  return (
    <div className="searchbar">
      <i className="search-logo">
        <CiSearch />
      </i>
      <input
        type="search"
        placeholder="Search by user name or email..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
