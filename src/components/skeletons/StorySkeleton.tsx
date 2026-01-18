import { Skeleton } from "@/components/ui/skeleton";

export function StorySkeleton() {
  return (
    <div className="flex flex-col items-center gap-1.5 min-w-[60px]">
      <Skeleton className="w-14 h-14 rounded-full" />
      <Skeleton className="h-3 w-12" />
    </div>
  );
}

export function StorySkeletonList({ count = 5 }: { count?: number }) {
  return (
    <div className="flex justify-center gap-5 px-4">
      {Array.from({ length: count }).map((_, i) => (
        <StorySkeleton key={i} />
      ))}
    </div>
  );
}
