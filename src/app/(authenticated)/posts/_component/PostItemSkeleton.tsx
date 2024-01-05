"use client";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export const PostItemSkeleton: React.FC<Props> = ({}) => {
  return (
    <div className="grid gap-2 rounded bg-white p-4 text-[14px] shadow">
      <div className="grid gap-4">
        <div className="flex w-full items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="postContent overflow-hidden">
          <Skeleton className="h-12" />
        </div>
      </div>
    </div>
  );
};
