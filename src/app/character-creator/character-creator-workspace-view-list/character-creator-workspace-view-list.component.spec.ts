import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorWorkspaceViewListComponent } from './character-creator-workspace-view-list.component';

describe('CharacterCreatorWorkspaceViewListComponent', () => {
    let component: CharacterCreatorWorkspaceViewListComponent;
    let fixture: ComponentFixture<CharacterCreatorWorkspaceViewListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterCreatorWorkspaceViewListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CharacterCreatorWorkspaceViewListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
