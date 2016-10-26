import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterService {

    character: any;
    reloader:EventEmitter<any> = new EventEmitter<any>();
    
    constructor(private http: Http) {}

    getCharacter(): any {
        console.log(this.character);
        return this.character;
    }

    setCharacter(realm: string, character: string): Promise<any> {

        var url = 'https://us.api.battle.net/wow/character/'+realm+'/'+character+'?fields=items+stats+guild&locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';

        return this.http.get(url)
            .toPromise()
            .then(response => {
                this.character = JSON.parse(response._body);
                if(!('guild' in this.character)) {
                    this.character.guild = null;
                }
                console.log(this.character);
                this.reloader.emit(this.character);
            })
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error || error);
    }
}