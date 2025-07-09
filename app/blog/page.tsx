"use client";

import { useState } from "react";
import blogData from "@/data/blog.json";
import { BlogPost } from "@/lib/types";
import Link from "next/link";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiLinkedin,
} from "react-icons/fi";
import Image from "next/image";
import FilloutButton from "../components/ui/FilloutButton";

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
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[80vh] px-6 text-center mb-8 pt-20 lg:pt-32 font-sans">
        <div className="container mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-[50%] text-left space-y-6">
            <span className="inline-block px-2 backdrop-blur text-blue-700 font-semibold text-md ">
              PWM Insights
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight uppercase">
              Our latest industry perspectives and thought leadership
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Stay updated on what's driving the conversation at our asset
              managers as well as our latest events, news and product updates.
            </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/img1.jpg"
              alt="Blog Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <main className=" py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8 font-sans">
        {/* Search Bar */}
        <section className="rounded-2xl px-6 py-10 mb-16 text-white ">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 ">
              Latest articles
            </h2>

            <div className="relative w-full lg:max-w-xl">
              <FiSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                size={20}
              />
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-blue-800 text-white placeholder-white/60 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Keyword Filter Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 max-w-7xl mx-auto">
            {/* All Blogs Button */}
            <button
              onClick={() => {
                setSearch("");
                setPage(1);
              }}
              className={`px-5 py-2 rounded-md font-medium shadow-sm transition ${
                search === ""
                  ? "bg-white text-blue-900 border border-blue-900"
                  : "bg-blue-800 hover:bg-blue-700 text-white"
              }`}
            >
              All Blogs
            </button>

            {/* Category Buttons */}
            {["Insights", "Announcements", "Tech"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSearch(category);
                  setPage(1);
                }}
                className={`px-5 py-2 rounded-md font-medium shadow-sm transition ${
                  search.toLowerCase() === category.toLowerCase()
                    ? "bg-white text-blue-900 border border-blue-900"
                    : "bg-blue-800 hover:bg-blue-700 text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

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
            {/* Previous Button */}
            {page > 1 && (
              <button
                onClick={handlePrev}
                aria-label="Previous Page"
                className="w-14 h-14 flex items-center justify-center rounded-md border border-white text-blue-900 bg-white hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <FiChevronLeft size={26} />
              </button>
            )}

            {/* Next Button */}
            {page < totalPages && (
              <button
                onClick={handleNext}
                aria-label="Next Page"
                className="w-14 h-14 flex items-center justify-center rounded-md text-white bg-blue-700 hover:brightness-110 transition-all duration-300"
              >
                <FiChevronRight size={26} />
              </button>
            )}
          </div>
        )}
      </main>

      {/* Newsletter CTA Section */}
      <section className="w-full flex flex-col lg:flex-row overflow-hidden mt-24 font-sans">
        {/* Left Half */}
        <div className="bg-blue-700 text-white px-10 lg:px-24 py-16 lg:py-24 ml-12 mb-4 flex flex-col justify-center gap-6 w-full lg:w-1/2 rounded-l-[3rem]">
          <h2 className="text-4xl font-bold">Join the conversation</h2>
          <p className="text-lg leading-relaxed max-w-xl">
            Hear from industry thought leaders in our interview series, explore
            our latest market commentary and stay informed about emerging PWM
            product use cases.
          </p>

          <div className="mt-6">
            <p className="text-lg font-semibold mb-4">Get in Touch with PWM</p>

            <FilloutButton buttonText="Subscribe" />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <FiLinkedin size={24} className="text-white" />
            <a
              href="https://www.linkedin.com/company/programming-with-maurya/"
              className="font-medium hover:underline text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>

        {/* Right Half */}
        <div className="bg-blue-600 w-full lg:w-1/2 min-h-[400px] mb-4"></div>
      </section>
    </>
  );
};

export default BlogPage;
