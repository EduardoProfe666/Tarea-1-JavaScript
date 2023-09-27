/**
 * Permite validar que una variable no contenga valor null o undefined.
 *
 * @param {*} x Variable a validar
 * @returns Booleano que identifica el resultado de la validación.
 */
export const validarNoNullUndefined = (x) => x !== null && x !== undefined;
