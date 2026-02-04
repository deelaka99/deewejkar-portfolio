/**
 * Utility function to create URL-friendly slugs.
 * Used for project detail pages.
 *
 * @param {string} text - The text to slugify.
 * @returns {string} - The URL-friendly slug.
 */
module.exports = function slugify(text) {
  if (!text) return "";

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w- ]+/g, "") // Remove all non-word chars
    .replace(/\s+/g, "-") // Replace remaining spaces with -
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};
