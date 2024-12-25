"use client";

import { Card } from '@/components/ui/card';
import { Droplets, TreePine } from 'lucide-react';

export function ProjectMap() {
  const projects = [
    {
      id: 1,
      name: "Dadaab Water Project",
      type: "water",
      description: "Community water access point serving 5000+ residents",
      icon: Droplets,
    },
    {
      id: 2,
      name: "Garissa Green Belt",
      type: "environment",
      description: "Reforestation initiative with 5000 indigenous trees",
      icon: TreePine,
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[400px] bg-gray-100 rounded-lg">
          {/* Map placeholder - In production, integrate with a mapping service */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Interactive Map Coming Soon
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Active Projects</h3>
          {projects.map((project) => (
            <Card key={project.id} className="p-4">
              <div className="flex items-start gap-4">
                <project.icon className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">{project.name}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}