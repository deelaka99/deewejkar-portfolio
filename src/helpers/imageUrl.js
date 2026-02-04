/**
 * Helper to get the correct image URL.
 * Handles both absolute URLs (e.g., Cloudinary) and relative URLs (local Strapi).
 *
 * @param {string} url - The URL string from the backend.
 * @returns {string|null} - The normalized URL.
 */
export const getImageUrl = (url) => {
  if (!url) return null;

  // If the URL is already absolute (starts with http:// or https://), return it as is.
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // Otherwise, prepend the backend URL.
  const backendUrl =
    process.env.GATSBY_BACKEND_URL || "https://services.deelakakariyawasam.dev";
  return `${backendUrl}${url}`;
};
