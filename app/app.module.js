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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const ui_router_ng2_1 = require('ui-router-ng2');
const app_routing_module_1 = require('./app-routing.module');
const app_component_1 = require('./components/app.component');
const character_component_1 = require('./components/character.component');
const error_component_1 = require('./components/error.component');
const home_component_1 = require('./components/home.component');
const header_component_1 = require('./components/header.component');
const item_popover_directive_1 = require('./directives/item-popover.directive');
const empty_popover_directive_1 = require('./directives/empty-popover.directive');
const weapon_popover_directive_1 = require('./directives/weapon-popover.directive');
const realm_service_1 = require('./services/realm.service');
const character_service_1 = require('./services/character.service');
const error_service_1 = require('./services/error.service');
const static_service_1 = require('./services/static.service');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            ui_router_ng2_1.UIRouterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            character_component_1.CharacterComponent,
            error_component_1.ErrorComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            item_popover_directive_1.ItemPopoverDirective,
            empty_popover_directive_1.EmptyPopoverDirective,
            weapon_popover_directive_1.WeaponPopoverDirective
        ],
        bootstrap: [
            ui_router_ng2_1.UIView
        ],
        providers: [character_service_1.CharacterService, error_service_1.ErrorService, realm_service_1.RealmService, static_service_1.StaticService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map