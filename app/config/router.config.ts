import { Injectable } from '@angular/core';
import { UIRouter } from 'ui-router-ng2';

@Injectable()
export class ConfigRouter {

    constructor(router: UIRouter) {
        router.urlRouterProvider.otherwise('/home');
        router.urlRouterProvider.when('/', '/home');
    }
}