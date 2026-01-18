import { Skeleton } from "@/components/ui/skeleton";

export function PodcastCardSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border">
      <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-5 w-full" />
      </div>
    </div>
  );
}

export function PodcastCardSkeletonList({ count = 2 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <PodcastCardSkeleton key={i} />
      ))}
    </div>
  );
}
