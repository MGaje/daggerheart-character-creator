import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CharacterClass } from '@classes';

@Injectable()
export class ClassService {

    constructor(
        private readonly http: HttpClient
    ) { }

    public getClasses(): Observable<CharacterClass[]> {
        return this.http.get<CharacterClass[]>('assets/data/classes.json');
    }
}
