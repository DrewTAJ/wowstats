import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { UIRouter } from 'ui-router-ng2';

import { RealmService } from '../services/realm.service';
import { CharacterService } from '../services/character.service';
import { ErrorService } from '../services/error.service';
import { Search } from '../search';

@Component({
    selector:'app-header',
    templateUrl: '../../views/header.view.html'
})

export class HeaderComponent implements OnInit {

    public myForm: FormGroup;
    model = new Search();
    submitted = false;

    realm = "";
    character = "";

    @Output() reloadSignal = new EventEmitter();

    private characterUrl = 'https://us.api.battle.net/wow/character/medivh/Voxe?locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';
    private realmsUrl = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';
    realms = [];

    constructor (private http: Http, 
    private realmService: RealmService, 
    private characterService: CharacterService,
    private errorService: ErrorService,
    private _router: UIRouter) {}

    searchCharacter(event: Event): void {
        event.preventDefault();
        this.characterService.setCharacter(this.model.realm, this.model.character)
            .then(response => {
                console.log("in searchCharacter");
                this.reloadSignal.emit(response);
                this._router.stateService.go('app.character');   
            }).catch(response => {
                console.log(response);
                this.errorService.setError(JSON.parse(response._body));
                this._router.stateService.go('app.error');
            });
    }

    

    getRealms(): void {
        this.realmService.getRealms().then(response => {
            this.realms = response;
            //this.model.realm = response[154].slug;
       //     this.model.realm = response[17].slug;
            this.model.realm = response[157].slug;
        }).catch(this.handleError);
    }

    ngOnInit(): void {
        this.getRealms();
        this.model.character = "Drewcifer";
    }

    handleError(error: any): void {
        console.error('An error occurred', error); // for demo purposes only
        this.http.get('realms.json')
            .toPromise()
            .then(response => console.log(response));
    }
}