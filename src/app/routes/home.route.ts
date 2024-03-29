import {
    Component,
    OnInit
} from '@angular/core';

import { Person } from '../models';
import { PersonTableComponent } from '../person/person-table.component';
import { PersonService } from '../services';

@Component({
    selector: 'home-route',
    standalone: true,
    templateUrl: 'home.route.html',
    styleUrl: 'home.route.scss',
    imports: [
        PersonTableComponent
    ],
    providers: [
        PersonService
    ]
})
export class HomeRoute implements OnInit {
    people: Person[] | null = null;

    constructor(
        private personSvc: PersonService
    ) { }

    async ngOnInit(): Promise<void> {
        this.people = await this.personSvc.get();
    }
}
