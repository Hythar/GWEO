import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
  index: number;
}

export function ProjectCard({ title, description, image, category, href, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary-600">
            {category}
          </p>
          <Link to={href} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </Link>
        </div>
        <div className="mt-6">
          <Link
            to={href}
            className="text-base font-semibold text-primary-600 hover:text-primary-500"
          >
            Learn more<span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}