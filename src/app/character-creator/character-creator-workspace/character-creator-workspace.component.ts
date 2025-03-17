import { Component, Input } from '@angular/core';
import { CharacterCreatorWorkspaceModeEnum } from '@enums';

@Component({
    selector: 'dh-cc-character-creator-workspace',
    templateUrl: './character-creator-workspace.component.html',
    styleUrl: './character-creator-workspace.component.scss'
})
export class CharacterCreatorWorkspaceComponent {
    @Input()
    public mode: CharacterCreatorWorkspaceModeEnum = CharacterCreatorWorkspaceModeEnum.Unknown;

    public WorkspaceModes: typeof CharacterCreatorWorkspaceModeEnum = CharacterCreatorWorkspaceModeEnum;

    constructor() {
        // Empty.
    }

    public changeMode(newMode: CharacterCreatorWorkspaceModeEnum) {
        this.mode = newMode;
    }

    public changeModeToCreating() {
        this.mode = CharacterCreatorWorkspaceModeEnum.Creating;
    }
}
