import { notFound } from "next/navigation";
import { BlogPost } from "@/lib/types";
import blogData from "@/data/blog.json";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/lib/mdx-components";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = (blogData as BlogPost[]).find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const mdxContent = await fetch(`${siteUrl}${post.contentPath}`).then((res) =>
    res.text()
  );

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 min-h-screen">
      {/* Header */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">
            {post.category}
          </p>
          <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-none">
            {post.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            <span className="font-medium text-gray-800">{post.author}</span> —{" "}
            {post.date}
          </p>
          <div className="w-16 h-1 bg-blue-700 mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="px-4 sm:px-6 lg:px-16 mb-10">
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="px-4 sm:px-6 lg:px-16 pb-20">
        <article
          className="prose prose-blue max-w-4xl mx-auto
    prose-headings:font-extrabold
    prose-h2:text-blue-800 prose-h2:mt-16 prose-h2:mb-6
    prose-h3:text-blue-700 prose-h3:mt-12 prose-h3:mb-4
    prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mt-4 text-[17px]
    prose-ul:list-disc prose-li:pl-1 prose-li:leading-relaxed prose-li:text-gray-700
    prose-strong:text-black
    prose-em:normal 
    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-100 prose-blockquote:rounded-lg prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:text-blue-900 not-italic
    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
    prose-a:text-blue-600 hover:prose-a:text-blue-900 no-underline
    prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
    prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:p-6 prose-pre:overflow-x-auto
    prose-hr:my-16"
        >
          <MDXRemote source={mdxContent} components={mdxComponents} />
        </article>

        {/* CTA */}
        <div className="mt-20 pt-10 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
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
