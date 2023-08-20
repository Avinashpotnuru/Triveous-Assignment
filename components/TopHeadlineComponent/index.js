"use client";

import React from "react";

import { useGetHeadlinesQuery } from "@/store/api/restApis";
import Headlines from "../Headlines";
import { Watch } from "react-loader-spinner";

const TopHeadlineComponent = () => {
  const { data, isLoading } = useGetHeadlinesQuery();
  // console.log(data?.articles);
  return (
    <div className="flex flex-col  justify-center items-center p-5">
      <h1 className="text-4xl font-extrabold mb-3 ">Head Lines</h1>
      {isLoading ? (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <div className="space-y-3 w-full  flex flex-col justify-center items-center ">
          {data?.articles.map((e, idx) => (
            <Headlines id={idx} key={idx} {...e} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopHeadlineComponent;
