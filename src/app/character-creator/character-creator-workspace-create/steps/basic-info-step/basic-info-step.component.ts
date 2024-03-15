import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { WorkspaceCreateBasicInfoForm } from '@interfaces';

@Component({
    selector: 'dh-cc-basic-info-step',
    templateUrl: './basic-info-step.component.html',
    styleUrl: './basic-info-step.component.scss'
})
export class BasicInfoStepComponent {
    @Input() public formGroup?: FormGroup<WorkspaceCreateBasicInfoForm>;
}
