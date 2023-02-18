import React from "react";

const ImageSearch = ({ searchText, text, setText }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2  border-teal-500 py-2">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 py-1 leading-tight focus:outline-none"
            placeholder="Search here for item"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className=" flex-shrink-0 bg-teal-500 hover:bg-teal-800 hover:border-teal-800 border-teal-600 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
