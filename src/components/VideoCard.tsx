import { Play } from "lucide-react";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  link: string;
}

const VideoCard = ({ thumbnail, title, link }: VideoCardProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer h-full"
    >
      {/* Thumbnail com botão play */}
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

        {/* Botão play circular vermelho */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/80 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
            <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* Título */}
      <h4 className="text-lg md:text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
        {title}
      </h4>
    </article>
  );
};

export default VideoCard;
