import { motion } from "framer-motion";

export type ScribblePathName = "about" | "hero" | "latest" | "themes" | "newsletter";

interface AnimatedScribbleProps {
    pathName?: ScribblePathName;
    className?: string;
    strokeColor?: string;
}

export const scribblePaths: Record<ScribblePathName, string> = {
    about: "M -100 100 C 200 0, 400 500, 300 600 C 200 700, 50 400, 300 300 C 550 200, 700 800, 850 700 C 1000 600, 900 100, 700 200 C 500 300, 900 600, 1100 500",
    // Hero (curvas fluidas, suaves, subindo)
    hero: "M -50 400 Q 200 200, 400 450 T 800 350 Q 950 250, 1050 300",
    // LatestPosts (curvas longas em zigue-zague elegante)
    latest: "M 0 100 C 150 150, 200 300, 400 250 S 700 400, 850 300 Q 950 200, 1050 250",
    // Themes (movimentos circulares e lúdicos)
    themes: "M -20 600 C 100 700, 300 300, 450 400 C 600 500, 700 800, 850 650 S 950 200, 1050 150",
    // Newsletter (envelopando e focado abaixo/acima)
    newsletter: "M 0 50 C 300 150, 600 0, 800 100 S 950 300, 1000 400"
};

export const AnimatedScribble = ({
    pathName = "about",
    className = "opacity-10",
    strokeColor = "currentColor"
}: AnimatedScribbleProps) => {

    const path = scribblePaths[pathName];

    return (
        <div className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}>
            <motion.svg
                viewBox="0 0 1000 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
            >
                <motion.path
                    d={path}
                    stroke={strokeColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 3.5, ease: "easeInOut" }}
                />
            </motion.svg>
        </div>
    );
};
