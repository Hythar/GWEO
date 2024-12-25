import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { AnimatedBackground } from "~/components/AnimatedBackground";

export const meta: MetaFunction = () => {
  return [
    { title: "Donate - Garissa Water & Environmental Organization" },
    { 
      name: "description", 
      content: "Support our mission to provide sustainable water solutions and environmental conservation in Garissa." 
    },
  ];
};

const donationOptions = {
  oneTime: [25, 50, 100, 250],
  monthly: [10, 25, 50, 100]
};

export default function Donate() {
  return (
    <div className="relative bg-white pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Make a Difference</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support Our Mission</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your donation helps us provide sustainable water solutions and environmental conservation initiatives to communities in Garissa.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              { title: "One-time Donation", options: donationOptions.oneTime, type: "once" },
              { title: "Monthly Donation", options: donationOptions.monthly, type: "monthly" }
            ].map((section, index) => (
              <motion.div
                key={section.type}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
              >
                <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary-50/50" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  <p className="mt-4 text-sm text-gray-600">
                    {section.type === "once"
                      ? "Make a one-time contribution to support our ongoing projects."
                      : "Become a sustaining donor with a monthly contribution."}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {section.options.map((amount) => (
                      <button
                        key={amount}
                        className="relative overflow-hidden rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:ring-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        ${amount}{section.type === "monthly" ? "/mo" : ""}
                      </button>
                    ))}
                  </div>
                  <button className="mt-8 w-full rounded-lg bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    {section.type === "once" ? "Donate Now" : "Donate Monthly"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
          >
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-nature-50/50" />
              <h3 className="relative text-xl font-semibold text-gray-900">Other Ways to Support</h3>
              <div className="relative mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Corporate Partnerships",
                    description: "Partner with us to make a lasting impact on water accessibility."
                  },
                  {
                    title: "In-Kind Donations",
                    description: "Donate equipment, materials, or professional services."
                  },
                  {
                    title: "Volunteer",
                    description: "Contribute your time and skills to help our mission."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/50"
                  >
                    <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <button className="mt-8 w-full rounded-lg bg-gray-50 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Contact Us to Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}