import { useParams } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import type { Project } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Project Details - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Detailed information about our water and environmental conservation projects." 
    },
  ];
};

const projects: Project[] = [
  {
    id: "1",
    title: "Dadaab Water Access Initiative",
    description: "Implementing sustainable water access solutions in Dadaab refugee complex through solar-powered wells and water distribution systems.",
    image: "/images/projects/dadaab-water.jpg",
    category: "Water Infrastructure",
    status: "In Progress",
    latitude: 0.0925,
    longitude: 40.3071
  },
  {
    id: "2",
    title: "Tana River Conservation",
    description: "Protecting and restoring the Tana River ecosystem through community-led conservation efforts and sustainable water management practices.",
    image: "/images/projects/tana-river.jpg",
    category: "Environmental Conservation",
    status: "Ongoing",
    latitude: 0.4547,
    longitude: 39.6406
  },
  {
    id: "3",
    title: "Community Water Management",
    description: "Training local communities in sustainable water management and maintenance of water infrastructure.",
    image: "/images/projects/community-water.jpg",
    category: "Education & Training",
    status: "Active",
    latitude: 0.4637,
    longitude: 39.6623
  }
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-primary-600">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project not found
          </h1>
          <p className="mt-6">The project you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-primary-600">{project.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {project.title}
        </h1>
        <div className="mt-8 max-w-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full rounded-xl bg-gray-100 object-cover"
          />
        </div>
        <div className="mt-10 max-w-2xl">
          <p className="text-xl leading-8">{project.description}</p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Project Status</h2>
            <p className="mt-4">
              Current Status: <span className="font-semibold text-primary-600">{project.status}</span>
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Location</h2>
            <p className="mt-4">
              Coordinates: {project.latitude}, {project.longitude}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}