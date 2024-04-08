import {
    AfterViewInit,
    Component,
    Input,
    ViewChild
} from '@angular/core';

import {
    MatSortModule,
    MatSort
} from '@angular/material/sort';

import {
    MatTableDataSource,
    MatTableModule
} from '@angular/material/table';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../models';
import { PersonCardComponent } from './person-card.component';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
    selector: 'person-table',
    standalone: true,
    templateUrl: 'person-table.component.html',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        OverlayModule,
        PersonCardComponent
    ]
})
export class PersonTableComponent implements AfterViewInit {
    person: Person | null = null;

    @Input({ required: true }) source!: MatTableDataSource<Person>;

    @Input() columns: string[] = [
        'image',
        'title',
        'lastName',
        'firstName',
        'jobTitle',
        'organization',
        'section',
        'phone',
        'email'
    ];

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(): void {
        this.source.sort = this.sort;
    }

    private openCard(person: Person) {
        this.person = person;
    }

    private closeCard() {
        this.person = null;
    }

    onTap(event: PointerEvent, person: Person) {
        if (event.pointerType !== 'mouse') {
            if (this.person) {
                if (person.id === this.person?.id) {
                    this.closeCard()
                } else {
                    this.openCard(person);
                }
            } else {
                this.openCard(person);
            }
        }
    }

    onEnter(event: PointerEvent, person: Person) {
        if (event.pointerType === 'mouse') {
            console.log('onEnter', event);
            this.openCard(person);
        }
    }

    onLeave(event: PointerEvent) {
        if (event.pointerType === 'mouse') {
            console.log('onLeave', event);
            this.closeCard();
        }
    }
}
