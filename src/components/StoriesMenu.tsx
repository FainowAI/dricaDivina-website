import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useStories } from "@/hooks/useStories";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { StorySkeletonList } from "@/components/skeletons";

const StoriesMenu = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { data: stories, isLoading, error } = useStories();

  // Só mostra em mobile
  if (!isMobile) return null;

  const handleStoryClick = (path: string) => {
    navigate(path);
  };

  if (error) return null;

  return (
    <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm z-[45] border-b border-border/40 py-2 shadow-sm will-change-transform">
      <ScrollArea className="w-full">
        {isLoading ? (
          <StorySkeletonList count={5} />
        ) : stories && stories.length > 0 ? (
          <div className="flex justify-center gap-5 px-4">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => handleStoryClick(story.path)}
                className="flex flex-col items-center gap-1.5 min-w-[60px] group"
              >
                {/* Story Circle with image */}
                <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 group-hover:scale-105 transition-transform duration-200">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background p-[2px]">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.label}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Label */}
                <span className="text-[11px] font-medium text-foreground/80 group-hover:text-primary transition-colors">
                  {story.label}
                </span>
              </button>
            ))}
          </div>
        ) : null}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default StoriesMenu;
