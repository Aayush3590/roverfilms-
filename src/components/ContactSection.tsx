import { motion } from "framer-motion";
import { Mail, MapPin, Phone,Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Let's <span className="italic text-gradient-gold">Create</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Ready to bring your vision to life? Whether it's a wedding, commercial, or passion project —
              I'd love to hear your story.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, text: "cinematographymedia@gmail.com" },
                { icon: Phone, text: "+1 (778)-838-0766" },
                { icon: MapPin, text: "Los Angeles, CA" },
                { icon: Clock, text: "Mon - Sun : 9:00 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-body text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Tell me about your project"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b border-border px-0 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-4 border border-primary px-10 py-4 font-body text-xs uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Send Message
            </button>
          </motion.form> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
