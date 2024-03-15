import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { CharacterCreatorWorkspaceComponent } from './character-creator-workspace/character-creator-workspace.component';
import { CharacterCreatorWorkspaceViewListComponent } from './character-creator-workspace-view-list/character-creator-workspace-view-list.component';
import { CharacterCreatorWorkspaceCreateComponent } from './character-creator-workspace-create/character-creator-workspace-create.component';

@NgModule({
    declarations: [
        CharacterCreatorComponent,
        CharacterCreatorWorkspaceComponent,
        CharacterCreatorWorkspaceViewListComponent,
        CharacterCreatorWorkspaceCreateComponent
    ],
    imports: [
        CommonModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule
    ],
    exports: [
        CharacterCreatorComponent
    ]
})
export class CharacterCreatorModule { }
