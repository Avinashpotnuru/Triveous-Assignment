"use client";

import { useParams } from "next/navigation";

import React from "react";

const Blog = () => {
  const params = useParams();

  return <div>Blog {params.id}</div>;
};

export default Blog;
