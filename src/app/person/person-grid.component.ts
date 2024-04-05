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

import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { FlexModule } from '../flex';
import { Person } from '../models';
import { PersonCardComponent } from './person-card.component';

@Component({
    selector: 'person-grid',
    standalone: true,
    templateUrl: 'person-grid.component.html',
    styleUrl: 'person-grid.component.scss',
    imports: [
        CommonModule,
        FlexModule,
        MatSortModule,
        PersonCardComponent
    ]
})
export class PersonGridComponent implements AfterViewInit {
    @Input({ required: true }) source!: MatTableDataSource<Person>;

    columns: Map<string, string> = new Map<string, string>([
        ['title', 'Title'],
        ['lastName', 'Last Name'],
        ['firstName', 'First Name'],
        ['jobTitle', 'Job Title'],
        ['organization', 'Organization'],
        ['section', 'Section'],
        ['phone', 'Phone'],
        ['email', 'Email']
    ]);

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(): void {
        this.source.sort = this.sort;
    }
}
