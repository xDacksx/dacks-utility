import { Change } from "./_change-colour";
import { GetTime } from "./_time";
import color from "colors";

function WarnMessage(text: string): void {
    const time = GetTime();
    const label = color.yellow("[Warning] ");

    const message = Change(text);

    console.log(time + label + message);
}

export { WarnMessage };
