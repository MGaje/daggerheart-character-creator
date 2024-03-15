import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { CharacterCreatorWorkspaceComponent } from './character-creator-workspace/character-creator-workspace.component';
import { CharacterCreatorWorkspaceViewListComponent } from './character-creator-workspace-view-list/character-creator-workspace-view-list.component';
import { CharacterCreatorWorkspaceCreateComponent } from './character-creator-workspace-create/character-creator-workspace-create.component';
import { BasicInfoStepComponent } from './character-creator-workspace-create/steps/basic-info-step/basic-info-step.component';
import { ClassStepComponent } from './character-creator-workspace-create/steps/class-step/class-step.component';

@NgModule({
    declarations: [
        CharacterCreatorComponent,
        CharacterCreatorWorkspaceComponent,
        CharacterCreatorWorkspaceViewListComponent,
        CharacterCreatorWorkspaceCreateComponent,
        BasicInfoStepComponent,
        ClassStepComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        LayoutModule
    ],
    exports: [
        CharacterCreatorComponent
    ]
})
export class CharacterCreatorModule { }
