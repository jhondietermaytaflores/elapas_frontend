import { Card } from "@/shared/ui/card/card";

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
}

export function StatCard({ title, value, subtitle }: StatCardProps) {
    return (
        <Card className="p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {value}
            </h3>
            {subtitle && (
                <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                    {subtitle}
                </p>
            )}
        </Card>
    );
}