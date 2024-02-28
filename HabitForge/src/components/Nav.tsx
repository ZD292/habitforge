import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Nav = () => {
  const navItems = ["Home", "Areas", "Calendar", "Settings", "Logout"];

  return (
    // <div className="flex flex-col h-full">
    //   {/* Top 1/3 Section */}
    //   <div className="flex-grow-0 h-1/3 bg-white border-b border-lightGreen py-8">
    //     <div className="flex flex-row">
    //       <button className="add_button">Add</button>
    //     </div>
    //     {/* <h1 className="text-center">Title</h1> */}
    //   </div>

    <div className="flex flex-col flex-grow max-w-[200px] border-r border-b border-lightGreen bg-white py-8">
      {" "}
      <div className="flex flex-col justify-center items-center p-2 gap-1">
        <AccountBoxIcon style={{ fontSize: 100 }} />I am the profile
      </div>
      <div className="flex flex-col space-y-4 m-8 p-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="flex border border-[#ABABAB] px-8 py-4 rounded-lg shadow-lg space-x-2 cursor-pointer hover:opacity-90 transition-all hover:shadow-xl
        text-white bg-[#ABABAB] items-center justify-center"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Nav;
