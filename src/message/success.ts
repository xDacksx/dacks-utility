import { Change } from "./_change-colour";
import { GetTime } from "./_time";
import color from "colors";

function SuccessMessage(text: string): void {
    const time = GetTime();
    const label = color.green("[Success] ");

    const message = Change(text);

    console.log(time + label + message);
}

export { SuccessMessage };
