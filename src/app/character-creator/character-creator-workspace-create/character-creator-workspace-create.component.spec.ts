import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorWorkspaceCreateComponent } from './character-creator-workspace-create.component';

describe('CharacterCreatorWorkspaceCreateComponent', () => {
    let component: CharacterCreatorWorkspaceCreateComponent;
    let fixture: ComponentFixture<CharacterCreatorWorkspaceCreateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterCreatorWorkspaceCreateComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CharacterCreatorWorkspaceCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
