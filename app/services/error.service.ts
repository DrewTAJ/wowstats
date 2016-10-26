import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

    error: any;

    getError(): any {
        return this.error;
    }

    setError(error: any): void {
        this.error = error;
    }
}