import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  delay?: number;
}

export function StatsCard({ title, value, description, delay = 0 }: StatsCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50"
    >
      <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-primary-50/50" />
      <div className="relative">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          {value}
        </p>
        <p className="mt-3 text-sm text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
}