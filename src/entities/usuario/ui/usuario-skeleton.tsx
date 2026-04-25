import { Card } from "@/shared/ui/card/card";
import { Skeleton } from "@/shared/ui/skeleton/skeleton";

export function UsuarioSkeleton() {
    return (
        <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-5">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
            </div>
        </Card>
    );
}