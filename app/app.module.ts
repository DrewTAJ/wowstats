import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule, UIView } from 'ui-router-ng2';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { CharacterComponent } from './components/character.component';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';
import { HeaderComponent } from './components/header.component';

import { ItemPopoverDirective } from './directives/item-popover.directive';
import { EmptyPopoverDirective } from './directives/empty-popover.directive';
import { WeaponPopoverDirective } from './directives/weapon-popover.directive';

import { RealmService } from './services/realm.service';
import { CharacterService } from './services/character.service';
import { ErrorService } from './services/error.service';
import { StaticService } from './services/static.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        UIRouterModule
    ],
    declarations: [ 
        AppComponent, 
        CharacterComponent, 
        ErrorComponent, 
        HomeComponent,
        HeaderComponent,
        ItemPopoverDirective,
        EmptyPopoverDirective,
        WeaponPopoverDirective 
    ],
    bootstrap: [ 
        UIView 
    ],
    providers: [ CharacterService, ErrorService, RealmService, StaticService ]
})

export class AppModule { 
 //   alert("in AppModule");
}