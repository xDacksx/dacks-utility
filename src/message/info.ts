import { Change } from "./_change-colour";
import { GetTime } from "./_time";
import color from "colors";

function InfoMessage(text: string): void {
    const time = GetTime();
    const label = color.cyan("[Info]    ");

    const message = Change(text);

    console.log(time + label + message);
}

export { InfoMessage };
