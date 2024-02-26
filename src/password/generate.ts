const simpleChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const specialChars = "~!@-$";

function generate(length: number, chars: string) {
    const characters = chars;
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
        .map((x) => characters[x % characters.length])
        .join("");
}

function Generate(length: number = 8, useSpecialChars: boolean = true) {
    if (useSpecialChars) return generate(length, simpleChars + specialChars);
    else return generate(length, simpleChars);
}

export { Generate };
