import { Change } from "./_change-colour";
import { GetTime } from "./_time";
import color from "colors";

function InfoMessage(text: string) {
    const time = GetTime();
    const label = color.cyan("[Info]    ");

    const message = Change(text);

    const print = time + label + message;
    console.log(print);
    return print;
}

export { InfoMessage };
