import { motion } from "framer-motion";
import { Film, Camera, Clapperboard, Aperture } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Wedding Films",
    description:
      "Cinematic wedding films that capture the emotion, joy, and intimate moments of your special day.",
  },
  {
    icon: Camera,
    title: "Commercial",
    description:
      "High-end brand content and commercial videography that elevates your visual identity.",
  },
  {
    icon: Clapperboard,
    title: "Music Videos",
    description:
      "Creative direction and cinematography for music videos that captivate and inspire.",
  },
  {
    icon: Aperture,
    title: "Documentary",
    description:
      "Compelling documentary filmmaking that uncovers truth and tells powerful human stories.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-yellow-400 mb-4">
            WHAT we DO
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Our{" "}
            <span className="italic bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}

              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-xl 
              bg-white/5 backdrop-blur-lg 
              border border-white/10 
              hover:border-yellow-400/50 
              transition-all duration-500 
              hover:shadow-[0_0_40px_rgba(255,215,0,0.15)]"
            >

              {/* ICON */}

              <div className="mb-6 text-yellow-400 group-hover:scale-110 transition">
                <service.icon size={36} strokeWidth={1.5} />
              </div>

              {/* TITLE */}

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;