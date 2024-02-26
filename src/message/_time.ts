import color from "colors";

function PadNumber(num: number) {
    return num > 9 ? `${num}` : `0${num}`;
}

function GetTime() {
    const now = new Date();

    const hours = PadNumber(now.getHours());
    const minutes = PadNumber(now.getMinutes());
    const seconds = PadNumber(now.getSeconds());

    return color.gray(`[${hours}:${minutes}:${seconds}]`);
}

export { GetTime };
