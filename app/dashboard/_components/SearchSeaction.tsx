import React from "react";

function SearchSeaction() {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-500 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">
        Browse our selection of premium products
      </h2>
      <p>What would you like to find today?</p>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg mt-5">
        <input
          type="text"
          placeholder="Search"
          className="border-none bg-transparent outline-none text-white"
        />
      </div>
    </div>
  );
}

export default SearchSeaction;
