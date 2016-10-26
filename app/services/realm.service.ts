import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RealmService {

    private realmsUrl = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=xar58v846kpe4mv3ycjtvjqnp26ncw8v';
    private headers = new Headers({'Content-Type':'application/json'});
    public realms = [];

    constructor(private http: Http) {}

    getRealms(): Promise<any> {
        return this.http.get(this.realmsUrl, this.headers)
            .toPromise()
            .then(response => JSON.parse(response._body).realms)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        var errorPromise = error;
        console.error('An error occurred', error); // for demo purposes only
        return this.http.get('realms.json')
            .toPromise()
            .then(response => console.log(response))
            .catch(error => Promise.reject(errorPromise || error));
    }
}