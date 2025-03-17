import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassStepComponent } from './subclass-step.component';

describe('SubclassStepComponent', () => {
    let component: SubclassStepComponent;
    let fixture: ComponentFixture<SubclassStepComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubclassStepComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SubclassStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
