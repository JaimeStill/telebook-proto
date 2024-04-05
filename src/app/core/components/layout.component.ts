import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlexModule } from '../../flex';
import { PreferencesService } from '../services';

@Component({
    selector: 'layout',
    standalone: true,
    templateUrl: 'layout.component.html',
    styleUrl: 'layout.component.scss',
    imports: [
        FlexModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class LayoutComponent<T> implements AfterViewInit {
    source = new MatTableDataSource<T>([]);

    @Input({ required: true }) set data(value: T[]) {
        this.source.data = value;
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild('#search') search!: HTMLInputElement;

    constructor(
        public preferences: PreferencesService
    ) { }

    ngAfterViewInit(): void {
        this.source.paginator = this.paginator;
    }

    filter(event: Event) {
        this.source.filter = (<HTMLInputElement>event.target)
            .value
            .trim()
            .toLowerCase();
    }

    layout(event: 'list' | 'grid') {
        if (this.preferences.Settings.layout != event) {
            this.preferences.update({ layout: event })
        }
    }

    page(event: PageEvent) {
        if (this.preferences.Settings.pageSize !== event.pageSize) {
            this.preferences.update({ pageSize: event.pageSize });
        }
    }
}
