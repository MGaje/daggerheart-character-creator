import { CharacterClassEnum } from "@enums";
import { Identifiable } from "@interfaces";

export class Foundation implements Identifiable {
    public id: string = crypto.randomUUID();
    public name: string = "new-foundation";
    public label: string = "New Foundation";
    public class: CharacterClassEnum = CharacterClassEnum.Unknown;

    constructor(init?: Partial<Foundation>) {
        Object.assign(this, init ?? {});
    }
}