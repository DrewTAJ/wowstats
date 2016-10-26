"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let RealmService = class RealmService {
    constructor(http) {
        this.http = http;
        this.realmsUrl = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.realms = [];
    }
    getRealms() {
        return this.http.get(this.realmsUrl, this.headers)
            .toPromise()
            .then(response => JSON.parse(response._body).realms)
            .catch(this.handleError);
    }
    handleError(error) {
        var errorPromise = error;
        console.error('An error occurred', error); // for demo purposes only
        return this.http.get('realms.json')
            .toPromise()
            .then(response => console.log(response))
            .catch(error => Promise.reject(errorPromise || error));
    }
};
RealmService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], RealmService);
exports.RealmService = RealmService;
//# sourceMappingURL=realm.service.js.map