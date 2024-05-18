export function formatArrayAsSentence(array: string[]): string {
    if (array.length === 0) return "";
    if (array.length === 1) return array[0];

    const lastElement = array.pop();

    return array.join(", ") + " and " + lastElement;
}
