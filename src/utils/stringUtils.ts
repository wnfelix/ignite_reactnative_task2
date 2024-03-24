/**
 * Verifica se as duas strings são iguais
 * @param value1
 * @param value2
 * @returns
 */
export function AreEqual(value1: string, value2: string): boolean {
	return value1.localeCompare(value2, undefined, { sensitivity: "base" }) === 0;
}
