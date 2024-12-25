import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { motion } from "framer-motion";
import { Map } from "~/components/Map";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Get in touch with us about our water and environmental initiatives." 
    },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // Handle form submission here
  return { success: true };
};

export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get in touch with us about our initiatives or how you can get involved.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white px-6 py-8 sm:px-8 rounded-2xl shadow-lg"
          >
            <Form method="post" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Send Message
              </button>

              {actionData?.success && (
                <p className="text-sm text-green-600">
                  Thank you for your message. We'll get back to you soon!
                </p>
              )}
            </Form>
          </motion.div>

          {/* Location and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="h-[400px] rounded-lg overflow-hidden">
              <Map
                center={[0.4547, 39.6406]}
                zoom={13}
                markers={[
                  {
                    position: [0.4547, 39.6406],
                    popup: "Garissa Water & Environmental Organization"
                  }
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
              <div className="space-y-2 text-base text-gray-600">
                <p>123 Main Street</p>
                <p>Garissa, Kenya</p>
                <p>Email: info@garissawater.org</p>
                <p>Phone: +254 123 456 789</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}