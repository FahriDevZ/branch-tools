/**
 * Fix express getter
 *
 * @param {*} value var
 * @param {boolean} [isTrim] Trim string
 * @return {string|null}
 */

function getString(value: any, isTrim?: boolean): string | null {
  if (typeof value === 'string') {
    if (isTrim) return value.trim();
    return value;
  }

  if (Array.isArray(value) && value.length) {
    return getString(value[value.length - 1], isTrim);
  }

  return null;
}

export default getString;
