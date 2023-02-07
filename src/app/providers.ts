import { InjectionToken } from "@angular/core";

// Each token in the app must be unique
export const lookupListsToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: ['Movies', 'Series']
};