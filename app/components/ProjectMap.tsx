import type { Project } from "~/types";
import { Map } from "./Map";

interface ProjectMapProps {
  projects: Project[];
}

export function ProjectMap({ projects }: ProjectMapProps) {
  const markers = projects.map(project => ({
    position: [project.latitude, project.longitude] as [number, number],
    popup: `
      <div class="max-w-xs">
        <h3 class="font-semibold text-gray-900">${project.title}</h3>
        <p class="mt-1 text-sm text-gray-500">${project.description}</p>
        <p class="mt-2 text-sm font-medium text-primary-600">
          Status: ${project.status}
        </p>
      </div>
    `
  }));

  return (
    <div className="h-[500px] w-full rounded-lg shadow-lg">
      <Map
        center={[0.4547, 39.6406]}
        zoom={12}
        markers={markers}
        className="rounded-lg"
      />
    </div>
  );
}