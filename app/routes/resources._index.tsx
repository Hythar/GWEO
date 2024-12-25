import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { DocumentTextIcon, VideoCameraIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Resources - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Access educational materials and resources about water conservation and environmental protection." 
    },
  ];
};

const resources = [
  {
    category: "Educational Materials",
    items: [
      {
        title: "Water Conservation Guide",
        description: "Comprehensive guide on water conservation techniques for households and communities.",
        icon: DocumentTextIcon,
        href: "/resources/water-conservation-guide"
      },
      {
        title: "Environmental Protection Handbook",
        description: "Best practices for protecting and preserving local ecosystems.",
        icon: DocumentTextIcon,
        href: "/resources/environmental-protection"
      }
    ]
  },
  {
    category: "Training Videos",
    items: [
      {
        title: "Well Maintenance Tutorial",
        description: "Step-by-step video guide on maintaining water wells and infrastructure.",
        icon: VideoCameraIcon,
        href: "/resources/well-maintenance"
      },
      {
        title: "Sustainable Farming Practices",
        description: "Video series on water-efficient farming techniques.",
        icon: VideoCameraIcon,
        href: "/resources/sustainable-farming"
      }
    ]
  },
  {
    category: "Educational Programs",
    items: [
      {
        title: "School Water Education Program",
        description: "Curriculum materials for teaching water conservation in schools.",
        icon: AcademicCapIcon,
        href: "/resources/school-program"
      },
      {
        title: "Community Workshop Materials",
        description: "Resources for conducting community workshops on environmental conservation.",
        icon: AcademicCapIcon,
        href: "/resources/workshop-materials"
      }
    ]
  }
];

export default function Resources() {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resource Center
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Access educational materials and resources about water conservation and environmental protection.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          {resources.map((section, sectionIndex) => (
            <div key={section.category} className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 2 + index) * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="relative flex items-start space-x-4 rounded-2xl border border-gray-200 p-6 hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}