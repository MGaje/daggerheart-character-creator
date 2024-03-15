import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'dh-cc-character-creator-workspace-view-list',
    templateUrl: './character-creator-workspace-view-list.component.html',
    styleUrl: './character-creator-workspace-view-list.component.scss'
})
export class CharacterCreatorWorkspaceViewListComponent {
    @Output()
    public createCharacterBtnClickedEvent: EventEmitter<void> = new EventEmitter<void>();

    public createCharacterBtnClicked() {
        this.createCharacterBtnClickedEvent.emit();
    }
}
