export function formatPostTags(tags: string | undefined) {
  if (!tags) return "";
  return tags
    .split(",")
    .map((tag: string) => `#${tag.trimStart()}`)
    .join(" ");
}