import {
    Component,
    OnInit
} from '@angular/core';

import {
    LayoutComponent,
    PreferencesService
} from '../core';

import {
    PersonGridComponent,
    PersonTableComponent
} from '../person';

import { Person } from '../models';
import { PersonService } from '../services';

@Component({
    selector: 'home-route',
    standalone: true,
    templateUrl: 'home.route.html',
    styleUrl: 'home.route.scss',
    imports: [
        LayoutComponent,
        PersonGridComponent,
        PersonTableComponent
    ],
    providers: [
        PersonService
    ]
})
export class HomeRoute implements OnInit {
    people: Person[] | null = null;

    constructor(
        public preferences: PreferencesService,
        private personSvc: PersonService
    ) { }

    async ngOnInit(): Promise<void> {
        this.people = await this.personSvc.get();
    }
}
