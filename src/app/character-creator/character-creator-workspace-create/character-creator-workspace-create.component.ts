import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'dh-cc-character-creator-workspace-create',
    templateUrl: './character-creator-workspace-create.component.html',
    styleUrl: './character-creator-workspace-create.component.scss'
})
export class CharacterCreatorWorkspaceCreateComponent {
    constructor(private readonly fb: FormBuilder) {
        // Empty.
    }

    public basicInfoFormGroup: FormGroup = this.fb.group({
        'name': ['', Validators.required],
        'pronouns': ['', Validators.required]
    });
}
