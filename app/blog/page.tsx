"use client";

import { useState } from "react";
import blogData from "@/data/blog.json";
import { BlogPost } from "@/lib/types";
import Link from "next/link";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BLOGS_PER_PAGE = 6;

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const blogs: BlogPost[] = blogData;

  const filteredBlogs = blogs.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (page - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[80vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto py-6 z-10 mt-8">
          <span className="inline-block px-5 py-1 text-blue-700 font-medium text-sm">
            PWM Blogs
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-none tracking-tight drop-shadow-sm font-sans uppercase">
            Our latest industry perspectives and thought leadership
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-4xl mx-auto mt-4 font-sans leading-tight">
            Stay updated on what's driving the conversation at our asset
            managers as well as our latest events, news and product updates
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-700 text-white text-sm sm:text-base rounded-full hover:bg-blue-800 transition-all shadow-md">
            Subscribe to Newsletter
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <main className="bg-gray-50 rounded-3xl py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xl">
            <FiSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search blogs by title or category..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedBlogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-700 transition">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-xs text-gray-500">
                    {post.date} · {post.author}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* No Blogs Fallback */}
        {filteredBlogs.length === 0 && (
          <div className="text-center text-gray-500 mt-10 text-sm">
            No blogs found.
          </div>
        )}

        {/* Pagination Buttons */}
        {filteredBlogs.length > BLOGS_PER_PAGE && (
          <div className="flex justify-center gap-4 mt-16">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition ${
                page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
              }`}
            >
              <FiChevronLeft size={18} /> Previous
            </button>

            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition ${
                page === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
              }`}
            >
              Next <FiChevronRight size={18} />
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default BlogPage;
