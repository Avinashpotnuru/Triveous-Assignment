"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";
import NewsCard from "../NewsCard";

const HomePage = () => {
  const [news, setNewsData] = useState([]);
  const [tab, setTab] = useState("general");
  const API_KEY = "18a2432b5d484a44ac02ef549813b3dd";

  const tabs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${tab}&pageSize=30`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      if (res.status) {
        console.log(res);
        setNewsData(res.data.articles);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);
  console.log("news", news);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-extrabold mb-3 ">News</h1>
      <div className="space-x-3 flex-wrap">
        {tabs.map((val, idx) => (
          <button
            onClick={() => setTab(val)}
            className={`bg-stone-500 p-2 hover:shadow-2xl ${
              tab === val ? "bg-red-500 shadow-red-500" : ""
            } `}
            key={idx}
          >
            {val}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 w-full mx-auto md:gap-5 my-7">
        {news.map((val, idx) => (
          <NewsCard key={idx} {...val} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
