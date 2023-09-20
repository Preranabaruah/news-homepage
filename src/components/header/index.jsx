import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-24 py-14">
        <p className="font-bold text-5xl">W.</p>
        <div className="flex decoration-none list-none space-x-4 text-textSecondary ">
          <li className="hover:text-primary hover:cursor-pointer">Home</li>
          <li className="hover:text-primary hover:cursor-pointer">New</li>
          <li className="hover:text-primary hover:cursor-pointer">Popular</li>
          <li className="hover:text-primary hover:cursor-pointer">Trending</li>
          <li className="hover:text-primary hover:cursor-pointer">
            Categories
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
