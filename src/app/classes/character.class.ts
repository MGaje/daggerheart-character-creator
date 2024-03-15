
import { CharacterClass, CharacterSubclass } from '@enums';

/**
 * Daggerheart Character.
 */
export class Character {

    public name: string | undefined;
    public pronouns: string | undefined;
    public level: number = 1;

    public class: CharacterClass = CharacterClass.Unknown;
    public subclass: CharacterSubclass = CharacterSubclass.Unknown;

    constructor() {
        // Empty.
    }

}