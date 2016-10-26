import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorService {

    error: any;
    reloader:EventEmitter<any> = new EventEmitter<any>();

    getError(): any {
        return this.error;
    }

    setError(error: any): void {
        this.error = error;
        this.reloader.emit(this.error);
    }
}