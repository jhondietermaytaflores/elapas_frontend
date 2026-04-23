import { Card } from "@/shared/ui/card/card";
import { Skeleton } from "./skeleton";

export function ChartSkeleton() {
    return (
        <Card className="p-5">
            <Skeleton className="mb-4 h-5 w-40" />
            <Skeleton className="h-80 w-full rounded-2xl" />
         {/*    <Skeleton className="h-[320px] w-full rounded-2xl" /> */}
        </Card>
    );
}