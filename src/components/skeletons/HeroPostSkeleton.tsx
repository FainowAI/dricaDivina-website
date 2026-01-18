import { Skeleton } from "@/components/ui/skeleton";

export function HeroPostSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      {/* Image */}
      <div className="order-2 md:order-1">
        <Skeleton className="aspect-[4/3] w-full rounded-lg" />
      </div>

      {/* Text */}
      <div className="order-1 md:order-2 flex flex-col justify-center space-y-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-px w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}
