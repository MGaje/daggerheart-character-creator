import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Foundation } from '@classes';
import { CharacterClassEnum } from '@enums/character-class.enum';

@Injectable()
export class FoundationService {
    constructor(
        private readonly http: HttpClient
    ) { }

    public getFoundations(characterClass?: CharacterClassEnum): Observable<Foundation[]> {
        return this.http.get<Foundation[]>('assets/data/foundations.json').pipe(
            map(foundations => {
                if (!characterClass) {
                    return foundations;
                }

                return foundations.filter(x => x.class === characterClass);
            })
        );
    }
}
