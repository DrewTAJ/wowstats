import { Component } from '@angular/core';

import { UIRouter } from 'ui-router-ng2';
import { ErrorService } from '../services/error.service';

@Component({
    'selector':'ui-view',
    templateUrl:'../../views/error.html'
})

export class ErrorComponent {

    error: any;

    constructor(private _router: UIRouter, private errorService: ErrorService) {}

    ngOnInit(): void {
        this.error = this.errorService.getError();
        console.log(this.error);
        if(!this.error) {
            this._router.stateService.go('app.home');
        }

        this.errorService.reloader.subscribe((error: any) => {
            this.error = error;
          //  this.reload();
        });
    }

}