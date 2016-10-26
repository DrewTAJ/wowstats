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
const ui_router_ng2_1 = require('ui-router-ng2');
const realm_service_1 = require('../services/realm.service');
const character_service_1 = require('../services/character.service');
const error_service_1 = require('../services/error.service');
const search_1 = require('../search');
let HeaderComponent = class HeaderComponent {
    constructor(http, realmService, characterService, errorService, _router) {
        this.http = http;
        this.realmService = realmService;
        this.characterService = characterService;
        this.errorService = errorService;
        this._router = _router;
        this.model = new search_1.Search();
        this.submitted = false;
        this.realm = "";
        this.character = "";
        this.characterUrl = 'https://us.api.battle.net/wow/character/medivh/Voxe?locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';
        this.realmsUrl = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';
        this.realms = [];
    }
    searchCharacter(event) {
        event.preventDefault();
        console.log(this.model.realm);
        console.log(this.model.character);
        this.characterService.setCharacter(this.model.realm, this.model.character)
            .then(response => {
            this._router.stateService.go('app.character');
        }).catch(response => {
            console.log(response);
            this.errorService.setError(response.statusText);
            this._router.stateService.go('app.error');
        });
    }
    getRealms() {
        this.realmService.getRealms().then(response => {
            this.realms = response;
            this.model.realm = response[154].slug;
        }).catch(this.handleError);
    }
    ngOnInit() {
        this.getRealms();
        //this.model.realm = "medivh";
        this.model.character = "Voxe";
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        this.http.get('realms.json')
            .toPromise()
            .then(response => console.log(response));
        //        this._router.stateService.go('app.error');
        //       return Promise.reject(JSON.parse(error._body) || error);
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: '../../views/header.view.html'
    }), 
    __metadata('design:paramtypes', [http_1.Http, realm_service_1.RealmService, character_service_1.CharacterService, error_service_1.ErrorService, ui_router_ng2_1.UIRouter])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map