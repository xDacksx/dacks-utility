export function isPast(date: Date) {
    const now = new Date();

    return date.getTime() - now.getTime() < 0;
}
