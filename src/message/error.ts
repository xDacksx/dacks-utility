import { Change } from "./_change-colour";
import { GetTime } from "./_time";
import color from "colors";

function ErrorMessage(text: string): void {
    const time = GetTime();
    const label = color.red("[Error]   ");

    const message = Change(text);

    console.log(time + label + message);
}

export { ErrorMessage };
