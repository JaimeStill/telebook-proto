import {
    Component,
    Input
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { FlexModule } from '../flex';
import { Person } from '../models';

@Component({
    selector: 'person-card',
    standalone: true,
    templateUrl: 'person-card.component.html',
    styleUrl: 'person-card.component.scss',
    imports: [
        CommonModule,
        FlexModule,
        MatDivider
    ]
})
export class PersonCardComponent {
    @Input({ required: true }) person!: Person;
    @Input() cardStyle: string = 'background-card border-divider rounded';
}
