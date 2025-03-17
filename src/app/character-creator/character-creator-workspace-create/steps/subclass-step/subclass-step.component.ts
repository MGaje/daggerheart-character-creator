import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { CharacterClassEnum } from '@enums';
import { FoundationService } from '@character-creator/services';
import { Foundation } from '@classes';
import { Identifiable, WorkspaceCreateFoundationForm } from '@interfaces';

@Component({
    selector: 'dh-cc-subclass-step',
    templateUrl: './subclass-step.component.html',
    styleUrl: './subclass-step.component.scss'
})
export class SubclassStepComponent implements OnChanges {
    @Input() public characterClass!: CharacterClassEnum;
    @Input() public formGroup!: FormGroup<WorkspaceCreateFoundationForm>;

    public foundations$!: Observable<Foundation[]>;

    constructor(private readonly foundationService: FoundationService) {
        // Empty.
    }
    
    public ngOnChanges(changes: SimpleChanges): void {
        this.foundations$ = this.foundationService.getFoundations(this.characterClass);
    }

    public selectFoundation(f: Identifiable) {
        this.getFoundationControl().setValue(f.id);
    }

    public getFoundationControl(): FormControl {
        return this.formGroup!.controls.foundation;
    }
}
