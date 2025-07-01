"use client";

import blogData from "@/data/blog.json";
import { BlogPost } from "@/lib/types";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = (blogData as BlogPost[]).find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const markdown = await fetch(`${siteUrl}${post.contentPath}`).then((res) =>
    res.text()
  );

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-10 sm:py-16">
          <p className="flex flex-col text-sm sm:text-base font-semibold uppercase tracking-widest text-blue-600 mb-3 mt-8">
            {post.category}

            <span>{post.date}</span>
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 flex flex-col  items-center gap-0">
            <span className="font-medium text-gray-800">{post.author}</span>
          </p>

          {post.image && (
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <article className="prose prose-indigo prose-base sm:prose-lg lg:prose-xl max-w-none prose-p:text-gray-800 prose-li:marker:text-blue-700 prose-blockquote:border-blue-300 prose-blockquote:text-gray-600 prose-img:rounded-md prose-a:text-blue-700 hover:prose-a:text-blue-900">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
        </article>

        {/* Footer CTA */}
        <div className="mt-14 pt-10 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            Enjoyed this article?{" "}
            <a
              href="/blog"
              className="text-blue-700 font-semibold hover:underline"
            >
              Browse more blog posts →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
