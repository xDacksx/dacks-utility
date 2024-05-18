export function addDays(days: number): Date {
    const currentDate = new Date();
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    return newDate;
}
