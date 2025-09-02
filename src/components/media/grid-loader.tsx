import { Spinner } from "@/components/spinner";

export default function GridLoader() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div
          key={idx}
          className="aspect-[4/5] rounded-md border bg-muted/30 flex items-center justify-center"
        >
          <Spinner className="text-muted-foreground" />
        </div>
      ))}
    </div>
  );
}