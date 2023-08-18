import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-600 h-[10vh] flex space-x-4 items-center ">
      <Link href="/">
        <h1 className="ml-4">Home</h1>
      </Link>
      <Link href={"/favorite"}>
        <h1>Favorite</h1>
      </Link>
    </div>
  );
};

export default Navbar;
