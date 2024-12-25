import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Newsletter } from '@/components/Newsletter';
import { ContactForm } from '@/components/ContactForm';
import { ProjectMap } from '@/components/ProjectMap';
import {
  Droplets,
  TreePine,
  Users,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            alt="Desert landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Protecting Garissa's Water Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Working together to ensure sustainable water management and environmental conservation for future generations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Our Projects
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Droplets, stat: '50K+', label: 'People with Clean Water' },
              { icon: TreePine, stat: '10K+', label: 'Trees Planted' },
              { icon: Users, stat: '100+', label: 'Community Partners' },
              { icon: BookOpen, stat: '25+', label: 'Education Programs' },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Garissa Water & Environmental Organization is dedicated to sustainable water management and environmental conservation in the Garissa region. We work closely with communities to implement water projects, protect natural resources, and promote environmental education.
              </p>
              <Button className="flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80"
                alt="Community water project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Map Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact Across Garissa</h2>
          <ProjectMap />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join us in our mission to protect and preserve Garissa's water resources. Whether you're interested in volunteering, partnering, or supporting our initiatives, we'd love to hear from you.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}