import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassService } from '@character-creator/services';
import { CharacterClass } from '@classes';
import { CharacterClassEnum } from '@enums';
import { Identifiable, WorkspaceCreateClassForm } from '@interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'dh-cc-class-step',
    templateUrl: './class-step.component.html',
    styleUrl: './class-step.component.scss'
})
export class ClassStepComponent implements OnInit {
    
    @Input() public formGroup?: FormGroup<WorkspaceCreateClassForm>;
    public CharacterClasses: typeof CharacterClassEnum = CharacterClassEnum;
    public classes$!: Observable<CharacterClass[]>;    
    
    constructor(
        private readonly classService: ClassService
    ) {
        // Empty.
    }

    public ngOnInit(): void {
        this.classes$ = this.classService.getClasses();
    }

    public selectClass(characterClass: Identifiable) {
        this.getClassControl().setValue(characterClass.id);
    }

    public getClassControl(): FormControl {
        return this.formGroup!.controls.class;
    }
}
