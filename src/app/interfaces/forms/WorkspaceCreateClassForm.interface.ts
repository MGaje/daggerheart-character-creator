import { FormControl } from "@angular/forms";
import { CharacterClassEnum } from "@enums";

export interface WorkspaceCreateClassForm {
    class: FormControl<CharacterClassEnum | undefined>
}