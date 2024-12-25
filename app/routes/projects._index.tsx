import type { MetaFunction } from "@remix-run/node";
import { ProjectCard } from "~/components/ProjectCard";
import { ProjectMap } from "~/components/ProjectMap";
import type { Project } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Projects - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Explore our water and environmental conservation projects across Garissa." 
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

export default function Projects() {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover our initiatives bringing sustainable water solutions and environmental conservation to Garissa.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Locations</h3>
          <ProjectMap projects={projects} />
        </div>

        {/* Project Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              href={`/projects/${project.id}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}