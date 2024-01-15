import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export const EngineerItemSkeleton: React.FC<Props> = ({}) => {
  return (
    <div className="grid gap-2 rounded bg-white p-4 text-[14px] shadow">
      <div className="grid gap-4">
        <div className="flex w-full items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-8 w-40" />
          <Skeleton className="ml-auto h-8 w-40" />
        </div>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <div className="grid gap-1">
          <Skeleton className="h-3" />
          <Skeleton className="h-3" />
        </div>
      </div>
    </div>
  );
};
