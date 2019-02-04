// IMPORT DATA FROM STATIC JSON FILE

import zips from './zips.json';

export const fetchZipCodes = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch');
            } else {
                resolve(zips);
            }
        }, 1000);
    });
};