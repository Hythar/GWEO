import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { AnimatedBackground } from "~/components/AnimatedBackground";
import { StatsCard } from "~/components/StatsCard";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Learn about our mission, vision, and commitment to sustainable water management and environmental conservation in Garissa." 
    },
  ];
};

const stats = [
  {
    title: "Communities Served",
    value: "50+",
    description: "Local communities benefiting from our water initiatives"
  },
  {
    title: "Water Projects",
    value: "120",
    description: "Successful water access points established"
  },
  {
    title: "Trees Planted",
    value: "25K+",
    description: "Contributing to environmental conservation"
  },
  {
    title: "Volunteers",
    value: "500+",
    description: "Dedicated community members supporting our mission"
  }
];

export default function About() {
  return (
    <div className="relative bg-white pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Story</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Garissa Water & Environmental Organization is dedicated to providing sustainable water solutions 
              and environmental conservation through community engagement, education, and innovative projects.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary-50/50" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-4 text-gray-600">
                  To provide sustainable water solutions and promote environmental conservation in Garissa 
                  through community engagement, education, and innovative projects.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-nature-50/50" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-4 text-gray-600">
                  A future where every community in Garissa has access to clean water and lives in harmony 
                  with their environment through sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Team</h3>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ahmed Hassan",
                role: "Executive Director",
                image: "/images/team/director.jpg",
                bio: "Leading our organization's mission with over 15 years of experience in water management."
              },
              {
                name: "Fatuma Omar",
                role: "Project Manager",
                image: "/images/team/manager.jpg",
                bio: "Coordinating our projects with expertise in environmental conservation and community engagement."
              },
              {
                name: "Ibrahim Mohamed",
                role: "Community Coordinator",
                image: "/images/team/coordinator.jpg",
                bio: "Building strong relationships between our organization and local communities."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
              >
                <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-earth-50/50 transition-transform duration-300 group-hover:scale-110" />
                <div className="relative">
                  <div className="flex items-center gap-x-4">
                    <img src={member.image} alt="" className="h-16 w-16 rounded-full ring-2 ring-white" />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-primary-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}