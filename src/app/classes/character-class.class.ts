import { Identifiable } from "@interfaces";

export class CharacterClass implements Identifiable {
    public id: string = '';
    public label: string = '';

    constructor(init?: Partial<CharacterClass>) {
        Object.assign(this, init ?? {});
    }
}