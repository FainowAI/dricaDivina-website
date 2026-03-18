interface CategoryHeaderProps {
  categoryName: string;
  postCount: number;
}

const CategoryHeader = ({ categoryName, postCount }: CategoryHeaderProps) => {
  return (
    <div className="relative py-16 md:py-20 lg:py-24 bg-gradient-orange-primary overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 md:w-72 md:h-72 rounded-full bg-white blur-3xl"></div>
      </div>

      {/* Animated SVG decoration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Floating circles */}
        <circle cx="80" cy="40" r="6" fill="white">
          <animate attributeName="cy" values="40;60;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="720" cy="160" r="4" fill="white">
          <animate attributeName="cy" values="160;140;160" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="20" r="5" fill="white">
          <animate attributeName="cy" values="20;35;20" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="170" r="3" fill="white">
          <animate attributeName="cy" values="170;155;170" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="630" cy="30" r="7" fill="white">
          <animate attributeName="cy" values="30;50;30" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="180" r="4" fill="white">
          <animate attributeName="cy" values="180;165;180" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Sparkle — rotating cross at left */}
        <g>
          <line x1="60" y1="92" x2="60" y2="108" stroke="white" strokeWidth="1.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 60 100" to="360 60 100" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="52" y1="100" x2="68" y2="100" stroke="white" strokeWidth="1.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 60 100" to="360 60 100" dur="6s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Sparkle — rotating cross at right */}
        <g>
          <line x1="740" y1="74" x2="740" y2="86" stroke="white" strokeWidth="1.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="360 740 80" to="0 740 80" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="734" y1="80" x2="746" y2="80" stroke="white" strokeWidth="1.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="360 740 80" to="0 740 80" dur="5s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Sparkle — small cross at top center */}
        <g>
          <line x1="250" y1="25" x2="250" y2="35" stroke="white" strokeWidth="1" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 250 30" to="360 250 30" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="245" y1="30" x2="255" y2="30" stroke="white" strokeWidth="1" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 250 30" to="360 250 30" dur="4s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Wavy line at bottom */}
        <path
          d="M0 190 Q100 180, 200 190 Q300 200, 400 190 Q500 180, 600 190 Q700 200, 800 190"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            values="M0 190 Q100 180, 200 190 Q300 200, 400 190 Q500 180, 600 190 Q700 200, 800 190;M0 195 Q100 185, 200 195 Q300 205, 400 195 Q500 185, 600 195 Q700 205, 800 195;M0 190 Q100 180, 200 190 Q300 200, 400 190 Q500 180, 600 190 Q700 200, 800 190"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>

        {/* Wavy line at top */}
        <path
          d="M0 15 Q100 5, 200 15 Q300 25, 400 15 Q500 5, 600 15 Q700 25, 800 15"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        >
          <animate
            attributeName="d"
            values="M0 15 Q100 5, 200 15 Q300 25, 400 15 Q500 5, 600 15 Q700 25, 800 15;M0 10 Q100 20, 200 10 Q300 0, 400 10 Q500 20, 600 10 Q700 0, 800 10;M0 15 Q100 5, 200 15 Q300 25, 400 15 Q500 5, 600 15 Q700 25, 800 15"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Rotating diamond — right side */}
        <polygon points="550,12 556,22 550,32 544,22" fill="white" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" from="0 550 22" to="360 550 22" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </polygon>

        {/* Rotating diamond — left side */}
        <polygon points="200,165 206,175 200,185 194,175" fill="white" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="360 200 175" to="0 200 175" dur="7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
        </polygon>

        {/* Small dashed arc — decorative */}
        <path
          d="M350 80 A 50 50 0 0 1 450 80"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="6 4"
          fill="none"
          opacity="0.3"
        >
          <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white drop-shadow-lg">
          {categoryName}
        </h1>
        {postCount > 0 && (
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/95 font-medium">
            {postCount} {postCount === 1 ? "post" : "posts"}
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;
