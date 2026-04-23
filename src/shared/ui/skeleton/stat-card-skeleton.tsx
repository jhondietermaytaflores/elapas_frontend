import { Card } from "@/shared/ui/card/card";
import { Skeleton } from "./skeleton";

export function StatCardSkeleton() {
    return (
        <Card className="p-5">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-4 h-8 w-32" />
            <Skeleton className="mt-3 h-3 w-20" />
        </Card>
    );
}