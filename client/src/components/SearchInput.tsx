import React from "react";

const SearchInput = (props) => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="max-w-2xl">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Search 280,000+ movies..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
