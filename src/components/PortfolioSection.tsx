// import { motion } from "framer-motion";
// import portfolio1 from "@/assets/portfolio-1.jpg";
// import portfolio2 from "@/assets/portfolio-2.jpg";
// import portfolio3 from "@/assets/portfolio-3.jpg";
// import portfolio4 from "@/assets/portfolio-4.jpg";
// import portfolio5 from "@/assets/portfolio-5.jpg";
// import portfolio6 from "@/assets/portfolio-6.jpg";

// const projects = [
//   { src: portfolio1, title: "Mountain Roads", category: "Landscape" },
//   { src: portfolio2, title: "Golden Vows", category: "Wedding" },
//   { src: portfolio3, title: "Neon Nights", category: "Urban" },
//   { src: portfolio4, title: "Soul Portrait", category: "Documentary" },
//   { src: portfolio5, title: "Ocean's Edge", category: "Nature" },
//   { src: portfolio6, title: "Behind the Lens", category: "BTS" },
// ];

// const PortfolioSection = () => {
//   return (
//     <section id="work" className="py-32 px-6">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Portfolio</p>
//           <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
//             Selected <span className="italic text-gradient-gold">Work</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="group relative overflow-hidden cursor-pointer aspect-[4/5]"
//             >
//               <img
//                 src={project.src}
//                 alt={project.title}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
//                 <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1">
//                   {project.category}
//                 </p>
//                 <h3 className="font-display text-2xl font-semibold text-foreground">
//                   {project.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;


















// import { motion } from "framer-motion";
// import { useRef } from "react";

// // Update these paths to your video files (e.g., .mp4)
// import portfolio1 from "@/assets/reel.mp4";
// import portfolio2 from "@/assets/reel.mp4";
// import portfolio3 from "@/assets/reel.mp4";
// import portfolio4 from "@/assets/reel.mp4";
// import portfolio5 from "@/assets/reel.mp4";
// import portfolio6 from "@/assets/reel.mp4";

// const projects = [
//   { src: portfolio1, title: "Mountain Roads", category: "Landscape" },
//   { src: portfolio2, title: "Golden Vows", category: "Wedding" },
//   { src: portfolio3, title: "Neon Nights", category: "Urban" },
//   { src: portfolio4, title: "Soul Portrait", category: "Documentary" },
//   { src: portfolio5, title: "Ocean's Edge", category: "Nature" },
//   { src: portfolio6, title: "Behind the Lens", category: "BTS" },
// ];

// // Sub-component to handle individual video logic
// const ProjectItem = ({ project, index }) => {
//   const videoRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (videoRef.current) {
//       videoRef.current.play().catch((error) => {
//         // Autoplay policy might block play if not muted
//         console.error("Video play failed:", error);
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       // Optional: Reset video to start when leaving
//       // videoRef.current.currentTime = 0; 
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="group relative overflow-hidden cursor-pointer aspect-[4/5] bg-black"
//     >
//       <video
//         ref={videoRef}
//         src={project.src}
//         loop
//         muted
//         playsInline
//         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />
      
//       {/* Overlay same as your photo theme */}
//       {/* <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
//         <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1">
//           {project.category}
//         </p>
//         <h3 className="font-display text-2xl font-semibold text-foreground">
//           {project.title}
//         </h3>
//       </div> */}
//     </motion.div>
//   );
// };

// const PortfolioSection = () => {
//   return (
//     <section id="work" className="py-32 px-6">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
//             Portfolio
//           </p>
//           <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
//             Selected <span className="italic text-gradient-gold">Work</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {projects.map((project, i) => (
//             <ProjectItem key={project.title} project={project} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;












import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Video imports
import portfolio1 from "@/assets/reel1.mp4";
import portfolio2 from "@/assets/reel2.mp4";
import portfolio3 from "@/assets/reel3.mp4";
import portfolio4 from "@/assets/reel4.mp4";
import portfolio5 from "@/assets/reel5.mp4";
import portfolio6 from "@/assets/reel6.mp4";
import portfolio7 from "@/assets/reel7.mp4";
import portfolio8 from "@/assets/reel8.mp4";
import portfolio9 from "@/assets/reel9.mp4";
import portfolio10 from "@/assets/reel10.mp4";
import portfolio11 from "@/assets/reel11.mp4";
import portfolio12 from "@/assets/reel12.mp4";
import portfolio13 from "@/assets/reel13.mp4";
import portfolio14 from "@/assets/reel14.mp4";

const ALL_PROJECTS = [
  { src: portfolio1, title: "Mountain Roads", category: "Landscape" },
  { src: portfolio2, title: "Golden Vows", category: "Wedding" },
  { src: portfolio3, title: "Neon Nights", category: "Urban" },
  { src: portfolio4, title: "Soul Portrait", category: "Documentary" },
  { src: portfolio5, title: "Ocean's Edge", category: "Nature" },
  { src: portfolio6, title: "Behind the Lens", category: "BTS" },
  { src: portfolio7, title: "Urban Jungle", category: "Architecture" },
  { src: portfolio8, title: "Desert Mist", category: "Travel" },
  { src: portfolio9, title: "City Pulse", category: "Street" },
  { src: portfolio10, title: "Wild Spirit", category: "Animal" },
  { src: portfolio11, title: "Silent Peaks", category: "Adventure" },
  { src: portfolio12, title: "Midnight Glow", category: "Cinematic" },
  { src: portfolio13, title: "Golden Hour", category: "Vibe" },
  { src: portfolio14, title: "Deep Blue", category: "Underwater" },
];

const ProjectItem = ({ project, index }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        } else {
          if (!entry.isIntersecting) {
            video.pause();
          }
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  const handleMouseEnter = () => {
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    if (isDesktop && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    if (isDesktop && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden cursor-pointer aspect-[4/5] bg-black rounded-sm"
    >
      <video
        ref={videoRef}
        src={project.src}
        loop
        muted
        playsInline
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Name and Category Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
          {project.category}
        </p>
        <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
          {project.title}
        </h3>
      </div> */}
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    const shuffleAndSlice = (array) => {
      const newArr = [...array];
      // Fisher-Yates Shuffle
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      // Take only the first 6 after shuffling
      return newArr.slice(0, 6);
    };

    setShuffledProjects(shuffleAndSlice(ALL_PROJECTS));
  }, []);

  return (
    <section id="work" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Selected <span className="italic text-gradient-gold">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledProjects.map((project, i) => (
            <ProjectItem key={`${project.title}-${i}`} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;