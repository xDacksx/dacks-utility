import { genSalt, hash } from "bcrypt";

async function Hash(password: string) {
    const salt = await genSalt();
    return await hash(password, salt);
}

export { Hash };
