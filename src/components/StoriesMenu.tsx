import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useStories } from "@/hooks/useStories";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { StorySkeletonList } from "@/components/skeletons";

const StoriesMenu = () => {
  const navigate = useNavigate();
  const { data: stories, isLoading, error } = useStories();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleStoryClick = (path: string) => {
    navigate(path);
  };

  if (error) return null;

  return (
    <div
      className={`w-full bg-background/95 backdrop-blur-sm z-[45] border-b border-border/40 py-1.5 shadow-sm will-change-transform transition-all duration-300 ${
        isVisible ? "max-h-24 opacity-100" : "max-h-0 opacity-0 overflow-hidden py-0 border-b-0"
      }`}
    >
      <ScrollArea className="w-full">
        {isLoading ? (
          <StorySkeletonList count={5} />
        ) : stories && stories.length > 0 ? (
          <div className="flex justify-center gap-4 px-4">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => handleStoryClick(story.path)}
                className="flex flex-col items-center gap-1 min-w-[56px] group"
              >
                {/* Story Circle with image */}
                <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 group-hover:scale-105 transition-transform duration-200">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background p-[2px]">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.label}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Label */}
                <span className="text-[10px] font-medium text-foreground/80 group-hover:text-primary transition-colors">
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
