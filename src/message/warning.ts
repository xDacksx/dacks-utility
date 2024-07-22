import { Change } from "./_change-colour";
import { GetTime } from "./_time";
import color from "colors";

function WarnMessage(text: string) {
    const time = GetTime();
    const label = color.yellow("[Warning] ");

    const message = Change(text);

    const print = time + label + message;
    console.log(print);
    return print;
}

export { WarnMessage };
