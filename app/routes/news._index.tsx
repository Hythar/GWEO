import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import type { NewsPost } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "News & Updates - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Stay updated with the latest news and developments from our water and environmental initiatives." 
    },
  ];
};

const news: NewsPost[] = [
  {
    id: "1",
    title: "New Solar-Powered Well System Completed in Dadaab",
    excerpt: "Bringing sustainable water access to over 1,000 households through innovative solar technology.",
    content: "Full article content here...",
    image: "/images/news/solar-well.jpg",
    date: "2024-02-20",
    author: "Ahmed Hassan"
  },
  {
    id: "2",
    title: "Community Training Program Launches",
    excerpt: "Local leaders participate in water management and maintenance training program.",
    content: "Full article content here...",
    image: "/images/news/training.jpg",
    date: "2024-02-15",
    author: "Fatuma Omar"
  },
  {
    id: "3",
    title: "Environmental Conservation Workshop Series",
    excerpt: "Monthly workshops teaching sustainable practices and environmental stewardship.",
    content: "Full article content here...",
    image: "/images/news/workshop.jpg",
    date: "2024-02-10",
    author: "Ibrahim Mohamed"
  }
];

export default function News() {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest News & Updates
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed about our latest projects, initiatives, and community impact.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-gray-500">{post.author}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/news/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}