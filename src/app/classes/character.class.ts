
import { CharacterClassEnum, CharacterSubclassEnum } from '@enums';

/**
 * Daggerheart Character.
 */
export class Character {

    public name: string | undefined;
    public pronouns: string | undefined;
    public level: number = 1;

    public class: CharacterClassEnum = CharacterClassEnum.Unknown;
    public subclass: CharacterSubclassEnum = CharacterSubclassEnum.Unknown;

    constructor() {
        // Empty.
    }

}