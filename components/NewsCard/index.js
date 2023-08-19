import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ title, description, urlToImage, id, name }) => {
  //   console.log("props", {});
  return (
    <div className=" relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 min-h-[600px] flex flex-col  items-center">
      <img className="rounded-t-lg" src={urlToImage} alt="" />
      <div className="overflow-y-auto max-w-full ">
        <div className="p-5 max-w-full ">
          <a href="#">
            <h5 className="max-w-full mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 overflow-y-auto max-w-full font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {!name ? (
            <div className="absolute bottom-6">
              <Link
                href={`/blog/${id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="absolute bottom-6">
              <Link
                href={`/articalblog/${id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
