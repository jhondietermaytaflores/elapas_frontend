export function getLastNDays(count: number): string[] {
    const dates: string[] = [];
    const today = new Date();

    for (let i = count - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(date.toISOString().split("T")[0]);
    }

    return dates;
}