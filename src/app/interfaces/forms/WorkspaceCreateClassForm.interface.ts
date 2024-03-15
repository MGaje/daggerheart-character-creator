import { FormControl } from "@angular/forms";
import { CharacterClass } from "@enums";

export interface WorkspaceCreateClassForm {
    class: FormControl<CharacterClass | undefined>
}