import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'dh-cc-nav',
    standalone: true,
    imports: [
        LayoutModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
    @Output() menuBtnClickedEvent = new EventEmitter();

    public showMenuBtn: boolean = false;

    constructor(private breakpointObserver: BreakpointObserver) {
        // Empty.
    }

    public ngOnInit() {
        this.breakpointObserver.observe([
            Breakpoints.Medium,
            Breakpoints.Small,
            Breakpoints.XSmall
        ]).subscribe(result => {
            if (result.matches) {
                this._activateMobileView();
            }
        });
    }

    public menuBtnClicked() {
        this.menuBtnClickedEvent.emit();
    }

    private _activateMobileView() {
        this.showMenuBtn = true;
    }
}
