import { Card } from "@/shared/ui/card/card";
import { Skeleton } from "@/shared/ui/skeleton/skeleton";

export function CorteSkeleton() {
    return (
        <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-4">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-20" />
            </div>
        </Card>
    );
}