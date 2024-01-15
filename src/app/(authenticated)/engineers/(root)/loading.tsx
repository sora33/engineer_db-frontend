import { EngineerItemSkeleton } from "@/app/(authenticated)/engineers/(root)/_compoent/EngineerItemSkeleton";

export default function Loading() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <EngineerItemSkeleton key={i} />
      ))}
    </div>
  );
}
