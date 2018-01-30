import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() viewUpdated = new EventEmitter<string>();

    changeViewTo(view:string) {
        this.viewUpdated.emit(view);
    }
};