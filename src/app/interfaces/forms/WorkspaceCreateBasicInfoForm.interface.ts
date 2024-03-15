import { FormControl } from "@angular/forms";

export interface WorkspaceCreateBasicInfoForm {
    name: FormControl<string>,
    pronouns: FormControl<string>
}