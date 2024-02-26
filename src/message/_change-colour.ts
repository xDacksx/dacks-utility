import color from "colors";

export type Colours = "yellow" | "red" | "blue";

function Change(text: string, colour?: Colours) {
    if (!colour) colour = "yellow";
    const regex = /\{([^}]+)\}/g;
    const parts = text.split(regex);

    const coloredText = parts.map((part, index) => {
        if (index % 2 === 1) {
            if (colour === "yellow") return color.yellow(part);
            if (colour === "blue") return color.blue(part);
            if (colour === "red") return color.red(part);
        }
        return part;
    });

    return coloredText.join("");
}

export { Change };
