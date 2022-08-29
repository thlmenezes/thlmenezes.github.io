export function getSlugFromFile(file: string) {
  return file.split('/').pop()?.split('.').shift() ?? ""
}
