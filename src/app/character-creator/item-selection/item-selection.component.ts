import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Identifiable } from '@interfaces';

@Component({
    selector: 'dh-cc-item-selection',
    templateUrl: './item-selection.component.html',
    styleUrl: './item-selection.component.scss'
})
export class ItemSelectionComponent {
    @Input() public items!: Identifiable[];
    @Input() public assetDir!: string;
    @Input() public ext: string = 'jpg';

    @Output() public selectedItemEvent: EventEmitter<Identifiable> = new EventEmitter<Identifiable>();

    private _selectedItem: Identifiable | undefined;

    public isSelected(item: Identifiable) {
        return this._selectedItem === item;
    }

    public selectItem(item: Identifiable) {
        this._selectedItem = item;
        this.selectedItemEvent.emit(this._selectedItem);
    }

    public getAssetFile(item: Identifiable): string {
        return `${this.assetDir}/${item.id}.${this.ext}`;
    }
}
