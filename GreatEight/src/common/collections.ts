'use strict';


/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are strings.
 */
interface IStringDictionary<V> {
    [name: string]: V;
}

/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are numbers.
 */
interface INumberDictionary<V> {
    [idx: number]: V;
}

function forEach<T>(from: INumberDictionary<T>, callback: (entry: { key: number; value: T; }) => void): void;
function forEach<T>(from: IStringDictionary<T>, callback: (entry: { key: string; value: T; }) => void): void;
function forEach<T>(from: any, callback: (entry: { key: any; value: T; }) => void): void {
    for (var key in from) {
        if (from.hasOwnProperty(key)) {
            let value = from[key];
            callback({ key, value });
        }
    }
}