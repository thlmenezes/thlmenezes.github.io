/**
 * Extract slug from path/to/file string
 * 
 * @example
 * // => 'saga-creche-continua'
 * getSlugFromFile('blog/saga-creche-continua');
 *
 * @param {string} file - 'path/to/file'
 * 
 * @returns {string} file slug extract from path like string
 */
export function getSlugFromFile(file: string) {
  return file.split('/').pop()?.split('.').shift() ?? ""
}
