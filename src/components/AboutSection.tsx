import { motion } from "framer-motion";
import aboutPortrait from "@/assets/about-potrait.jpeg";

const stats = [
  { value: "150+", label: "Projects" },
  { value: "8", label: "Years" },
  { value: "12", label: "Awards" },
  { value: "50+", label: "Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutPortrait}
                alt="Filmmaker portrait"
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/30" /> */}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Vision Behind
              <br />
              <span className="italic text-gradient-gold">the Lens</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              With over 8 years of experience in cinematography, I've dedicated my craft to
              capturing stories that move people. From intimate weddings to sweeping landscapes,
              every project is an opportunity to create something extraordinary.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-12">
              My approach blends technical precision with artistic intuition — finding the perfect
              light, the decisive moment, and the composition that transforms a scene into a feeling. 
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-12">
              We create compelling music videos, commercial ads,
               and social media content to enhance your brand’s presence and impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-gradient-gold">{stat.value}</p>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
