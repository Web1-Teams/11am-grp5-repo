import React from "react";

const SearchBox = () => {
  return (
    <div className="search-box">
      <form>
        <label>
          <input type="text" required placeholder="search" />
          <button>Search</button>
        </label>
      </form>
    </div>
  );
};

export default SearchBox;
