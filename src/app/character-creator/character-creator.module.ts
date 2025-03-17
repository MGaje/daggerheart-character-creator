import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { CharacterCreatorWorkspaceComponent } from './character-creator-workspace/character-creator-workspace.component';
import { CharacterCreatorWorkspaceViewListComponent } from './character-creator-workspace-view-list/character-creator-workspace-view-list.component';
import { CharacterCreatorWorkspaceCreateComponent } from './character-creator-workspace-create/character-creator-workspace-create.component';
import { BasicInfoStepComponent } from './character-creator-workspace-create/steps/basic-info-step/basic-info-step.component';
import { ClassStepComponent } from './character-creator-workspace-create/steps/class-step/class-step.component';
import { SubclassStepComponent } from './character-creator-workspace-create/steps/subclass-step/subclass-step.component';
import { LoadingComponent } from './loading/loading.component';
import { ItemSelectionComponent } from './item-selection/item-selection.component';

@NgModule({
    declarations: [
        CharacterCreatorComponent,
        CharacterCreatorWorkspaceComponent,
        CharacterCreatorWorkspaceViewListComponent,
        CharacterCreatorWorkspaceCreateComponent,
        BasicInfoStepComponent,
        ClassStepComponent,
        SubclassStepComponent,
        LoadingComponent,
        ItemSelectionComponent
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
        MatProgressSpinnerModule,
        LayoutModule
    ],
    exports: [
        CharacterCreatorComponent
    ]
})
export class CharacterCreatorModule { }
