import { Component, Input } from '@angular/core';
import { CharacterCreatorWorkspaceMode } from '@enums';

@Component({
    selector: 'dh-cc-character-creator-workspace',
    templateUrl: './character-creator-workspace.component.html',
    styleUrl: './character-creator-workspace.component.scss'
})
export class CharacterCreatorWorkspaceComponent {
    @Input()
    public mode: CharacterCreatorWorkspaceMode = CharacterCreatorWorkspaceMode.Unknown;

    public WorkspaceModes: typeof CharacterCreatorWorkspaceMode = CharacterCreatorWorkspaceMode;

    constructor() {
        // Empty.
    }

    public changeMode(newMode: CharacterCreatorWorkspaceMode) {
        this.mode = newMode;
    }

    public changeModeToCreating() {
        this.mode = CharacterCreatorWorkspaceMode.Creating;
    }
}
