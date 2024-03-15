import { Component } from '@angular/core';
import { CharacterCreatorWorkspaceMode } from '@enums';

@Component({
    selector: 'dh-cc-character-creator',
    templateUrl: './character-creator.component.html',
    styleUrl: './character-creator.component.scss'
})
export class CharacterCreatorComponent {
    public workspaceMode: CharacterCreatorWorkspaceMode = CharacterCreatorWorkspaceMode.ViewingList;

    constructor() {
        // Empty.
    }
}
