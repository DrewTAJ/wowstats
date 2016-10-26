import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StateRegistry, UIRouterModule, UIView, Ng2StateDeclaration, loadNgModule } from "ui-router-ng2";

import { AppComponent } from './components/app.component';
import { CharacterComponent } from './components/character.component';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';

import { ConfigRouter } from './config/router.config';
 
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

    let appStates: Ng2StateDeclaration[] = [
        { name:'app', url:'/', component: AppComponent },
        { name:'app.home', url:'home', component: HomeComponent},
        { name:'app.error', url:'error', component: ErrorComponent},
        { name:'app.character', url:'character', component: CharacterComponent }
    ];

@NgModule({
    imports: [
        //UIRouterModule.forRoot({ states: routes, useHash: true})
        UIRouterModule.forRoot({ states: appStates, otherwise: { state: 'app.home', params: {} }, useHash:true, configClass: ConfigRouter})
    ],
 //   bootstrap: [UIView], 
    exports: [ UIRouterModule ]
})

export class AppRoutingModule {
    //console.log("in AppRoutingModule");
}