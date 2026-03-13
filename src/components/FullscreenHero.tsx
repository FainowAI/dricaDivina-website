import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FullscreenHero = () => {
  // Animation variants for staggered letter appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const title = "DRICA DIVINA";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with fade-in and subtle zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://fonpnogwwrqjhzahcbge.supabase.co/storage/v1/object/public/drica-images/header-image.png"
          alt="Drica Divina"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Text Overlay - positioned on the right */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="pr-8 md:pr-16 lg:pr-24 xl:pr-32">
          {/* Animated title with staggered letters */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-foreground relative"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {/* Animated underline SVG */}
            <motion.svg
              className="absolute -bottom-4 left-0 w-full h-4"
              viewBox="0 0 300 16"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
            >
              <motion.path
                d="M5 8 Q75 2, 150 10 T295 6"
                stroke="hsl(14, 100%, 60%)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.h1>
        </div>
      </div>

      {/* Scroll indicator - bottom right */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs md:text-sm text-foreground/70 tracking-widest uppercase">
          Role
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-orange-vibrant" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FullscreenHero;
