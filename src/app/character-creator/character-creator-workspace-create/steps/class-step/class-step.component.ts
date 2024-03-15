import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CharacterClass } from '@enums';
import { WorkspaceCreateClassForm } from '@interfaces';

@Component({
    selector: 'dh-cc-class-step',
    templateUrl: './class-step.component.html',
    styleUrl: './class-step.component.scss'
})
export class ClassStepComponent {
    
    @Input() public formGroup?: FormGroup<WorkspaceCreateClassForm>;
    public CharacterClasses: typeof CharacterClass = CharacterClass;        

    public selectClass(characterClass: CharacterClass) {
        this.getClassControl().setValue(characterClass);
    }

    public isSelected(characterClass: CharacterClass) {
        return this.getClassControl().getRawValue() === characterClass;
    }

    public getClassControl(): FormControl {
        return this.formGroup!.controls.class;
    }
}
