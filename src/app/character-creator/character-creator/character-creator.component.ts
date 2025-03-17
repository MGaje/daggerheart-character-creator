import { Component } from '@angular/core';
import { CharacterCreatorWorkspaceModeEnum } from '@enums';
import { ClassService, FoundationService } from '@character-creator/services';

@Component({
    selector: 'dh-cc-character-creator',
    templateUrl: './character-creator.component.html',
    styleUrl: './character-creator.component.scss',
    providers: [
        FoundationService,
        ClassService
    ]
})
export class CharacterCreatorComponent {
    public workspaceMode: CharacterCreatorWorkspaceModeEnum = CharacterCreatorWorkspaceModeEnum.ViewingList;

    constructor() {
        // Empty.
    }
}
