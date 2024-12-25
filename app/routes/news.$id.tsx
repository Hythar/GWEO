import { useParams } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import type { NewsPost } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "News Article - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Read our latest news and updates about water and environmental initiatives in Garissa." 
    },
  ];
};

const news: NewsPost[] = [
  {
    id: "1",
    title: "New Solar-Powered Well System Completed in Dadaab",
    excerpt: "Bringing sustainable water access to over 1,000 households through innovative solar technology.",
    content: `Our team has successfully completed the installation of a new solar-powered well system in the Dadaab region, marking a significant milestone in our mission to provide sustainable water access to local communities.

The system, which utilizes cutting-edge solar technology, will serve over 1,000 households in the area, providing reliable access to clean water while minimizing environmental impact. This project represents a collaborative effort between our organization, local community leaders, and international partners.

Key features of the new system include:
- Solar panels generating up to 10kW of power
- Advanced filtration system ensuring water quality
- Community-managed distribution points
- Training program for local maintenance teams

This achievement demonstrates our commitment to implementing sustainable solutions that address both immediate water needs and long-term environmental considerations.`,
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

export default function NewsArticle() {
  const { id } = useParams();
  const article = news.find(n => n.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-primary-600">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Article not found
          </h1>
          <p className="mt-6">The article you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="mx-auto max-w-2xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={article.date} className="text-gray-500">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="text-gray-500">{article.author}</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {article.title}
          </h1>
        </div>
        <div className="mt-8 max-w-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-video w-full rounded-xl bg-gray-100 object-cover"
          />
        </div>
        <div className="mt-10 max-w-2xl">
          <div className="prose prose-lg prose-primary">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mt-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}