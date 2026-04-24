import { Card } from "@/shared/ui/card/card";

interface DashboardEmptyProps {
    title: string;
    description: string;
}

export function DashboardEmpty({
    title,
    description,
}: DashboardEmptyProps) {
    return (
        <Card className="p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {description}
            </p>
        </Card>
    );
}