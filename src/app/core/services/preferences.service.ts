import { Injectable } from '@angular/core';

type Layout = 'list' | 'grid';

export interface Preferences {
    layout: Layout;
    pageSize: number;
    popoverCard: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PreferencesService {
    private readonly KEY = 'preferences';
    private defaults: Preferences = {
        layout: 'list',
        pageSize: 20,
        popoverCard: true
    }

    private settings: Preferences = this.defaults;

    get Settings(): Preferences { return this.settings; }

    load() {
        const stored = localStorage.getItem(this.KEY);

        this.settings = stored
            ? JSON.parse(stored)
            : this.defaults;
    }

    update(preferences: Partial<Preferences>) {
        this.settings = Object.assign(this.settings, preferences);
        localStorage.setItem(this.KEY, JSON.stringify(this.settings));
    }
}
