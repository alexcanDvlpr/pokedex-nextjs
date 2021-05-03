
/**
 * Set String to Title Case
 * @param {String} str 
 * @returns String with title case
 */
export const nameToTitleCase = (str) => {
    let pokeName = str.toLowerCase().split(' ');
    for (var i = 0; i < pokeName.length; i++) {
        pokeName[i] = pokeName[i][0].toUpperCase() + pokeName[i].slice(1);
    }
    return pokeName.join(' ');
}

/*  TODO: Refactor  */

/**
 * Change hectograms to kilograms
 * @param {number} hg 
 * @return kilograms
 */
export const hectogramsToKilograms = (hg) => {
    let kilograms = 0;
    if (typeof hg === 'number') {
        kilograms = hg / 10;
    }
    return kilograms
}

/**
 * Chenge decimetres to Metres
 * @param {number} dm 
 * @returns metres
 */
export const decimetresToMetres = (dm) => {
    let metres = 0;
    if (typeof dm === 'number') {
        metres = dm / 10
    }
    return metres
}