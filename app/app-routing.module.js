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
const ui_router_ng2_1 = require("ui-router-ng2");
const app_component_1 = require('./components/app.component');
const character_component_1 = require('./components/character.component');
const error_component_1 = require('./components/error.component');
const home_component_1 = require('./components/home.component');
const router_config_1 = require('./config/router.config');
// const routes: Routes = [
//     {
//         path: '',
//         redirectTo: '/app',
//         pathMatch: 'full'
//     },
//     {
//         path: '/',
//         component: AppComponent
//     },
//     {
//         path: 'app',
//         component: AppComponent
//     }
// ];
let appStates = [
    { name: 'app', url: '/', component: app_component_1.AppComponent },
    { name: 'app.home', url: 'home', component: home_component_1.HomeComponent },
    { name: 'app.error', url: 'error', component: error_component_1.ErrorComponent },
    { name: 'app.character', url: 'character', component: character_component_1.CharacterComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            //UIRouterModule.forRoot({ states: routes, useHash: true})
            ui_router_ng2_1.UIRouterModule.forRoot({ states: appStates, otherwise: { state: 'app.home', params: {} }, useHash: true, configClass: router_config_1.ConfigRouter })
        ],
        //   bootstrap: [UIView], 
        exports: [ui_router_ng2_1.UIRouterModule]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map