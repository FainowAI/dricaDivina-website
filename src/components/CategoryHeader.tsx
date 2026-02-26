interface CategoryHeaderProps {
  categoryName: string;
  postCount: number;
}

const CategoryHeader = ({ categoryName, postCount }: CategoryHeaderProps) => {
  return (
    <div className="relative py-16 md:py-20 lg:py-24 bg-gradient-orange-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 md:w-72 md:h-72 rounded-full bg-white blur-3xl"></div>
      </div>

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
