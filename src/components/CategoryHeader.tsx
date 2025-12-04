interface CategoryHeaderProps {
  categoryName: string;
  postCount: number;
}

const CategoryHeader = ({ categoryName, postCount }: CategoryHeaderProps) => {
  return (
    <div className="text-center py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
        {categoryName}
        <span className="ml-8 md:ml-12 lg:ml-16">{postCount}</span>
      </h1>
    </div>
  );
};

export default CategoryHeader;
