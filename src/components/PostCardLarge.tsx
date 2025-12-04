import { useNavigate } from "react-router-dom";

interface PostCardLargeProps {
  title: string;
  category: string;
  image: string;
  link: string;
}

const PostCardLarge = ({ title, category, image, link }: PostCardLargeProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full"
    >
      {/* Imagem quadrada */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Linha sutil separando imagem do texto */}
      <div className="border-t border-border"></div>

      {/* Conteúdo */}
      <div className="p-4 md:p-6 lg:p-8 space-y-2 md:space-y-4">
        <p className="text-xs md:text-sm uppercase font-semibold text-primary tracking-wider">
          {category}
        </p>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default PostCardLarge;
