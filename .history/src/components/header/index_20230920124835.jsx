import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-24 py-14">
        <p className="font-bold text-5xl">W.</p>
        <div className="flex decoration-none list-none space-x-4 text-textSecondary font-medium">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </div>
      </div>
    </>
  );
};

export default Header;
