import { Card } from "@/shared/ui/card/card";
import { Skeleton } from "@/shared/ui/skeleton/skeleton";

export function FacturaSkeleton() {
    return (
        <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-4">
                <div>
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="mt-3 h-6 w-28" />
                </div>
                <div>
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="mt-3 h-6 w-24" />
                </div>
                <div>
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="mt-3 h-6 w-20" />
                </div>
                <div>
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="mt-3 h-6 w-28" />
                </div>
            </div>
        </Card>
    );
}