import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Headlines = ({ title, id }) => {
  return (
    <div className=" w-full p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:w-[50%] ">
      <h1 className="text-red-600 font-bold">{title}</h1>
      <div className=" w-full self-end ">
        <div className="flex justify-end items-center mt-3">
          <h1>Read more</h1>
          <Link href={`/headlines/${id}`}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
