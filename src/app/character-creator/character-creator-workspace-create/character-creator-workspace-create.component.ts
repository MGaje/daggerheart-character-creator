import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CharacterClass } from '@enums';
import {
    WorkspaceCreateBasicInfoForm,
    WorkspaceCreateClassForm
} from '@interfaces';

@Component({
    selector: 'dh-cc-character-creator-workspace-create',
    templateUrl: './character-creator-workspace-create.component.html',
    styleUrl: './character-creator-workspace-create.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class CharacterCreatorWorkspaceCreateComponent implements OnInit {
    constructor(private readonly fb: FormBuilder) {
        // Empty.
    }

    public ngOnInit(): void {
        // this.basicInfoFormGroup.valueChanges.subscribe(value => {
        //     console.log(value);
        // });

        this.classFormGroup.valueChanges.subscribe(value => {
            console.log(value);
        });
    }

    public basicInfoFormGroup: FormGroup<WorkspaceCreateBasicInfoForm> = this.fb.group<WorkspaceCreateBasicInfoForm>({
        'name': this.fb.nonNullable.control('', Validators.required),
        'pronouns': this.fb.nonNullable.control('', Validators.required),
    });

    public classFormGroup: FormGroup<WorkspaceCreateClassForm> = this.fb.group<WorkspaceCreateClassForm>({
        'class': this.fb.nonNullable.control(undefined, Validators.required)
    });
}
