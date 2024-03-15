import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorWorkspaceComponent } from './character-creator-workspace.component';

describe('CharacterCreatorWorkspaceComponent', () => {
    let component: CharacterCreatorWorkspaceComponent;
    let fixture: ComponentFixture<CharacterCreatorWorkspaceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterCreatorWorkspaceComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CharacterCreatorWorkspaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
