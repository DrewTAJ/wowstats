import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterService {

    character: any;
    
    constructor(private http: Http) {}

    getCharacter(): any {
  //      console.log(this.character);
        return this.character;
    }

    setCharacter(realm: string, character: string): Promise<any> {

        var url = 'https://us.api.battle.net/wow/character/'+realm+'/'+character+'?fields=items+stats+guild&locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';

        return this.http.get(url)
            .toPromise()
            .then(response => this.character = JSON.parse(response._body))
            .catch(this.handleError);
    }

    getItem(realm: string, character): any {

    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error || error);
    }
}