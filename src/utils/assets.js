/**
 * Safely resolves asset paths for local development and GitHub Pages production.
 *
 * Examples:
 * - Local dev:       getAssetUrl('/AhmedAwsaf-small.jpg') -> '/AhmedAwsaf-small.jpg'
 * - GitHub Pages:    getAssetUrl('/AhmedAwsaf-small.jpg') -> '/personal-portfolio/AhmedAwsaf-small.jpg' (or './AhmedAwsaf-small.jpg')
 */
export const getAssetUrl = (path) => {
  if (!path || typeof path !== 'string') return path;

  // External URLs or data URIs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Strip leading slashes to prevent root-domain resolution on GitHub Pages
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');

  // If already prefixed, do not duplicate
  if (publicUrl && cleanPath.startsWith(publicUrl)) {
    return cleanPath;
  }

  return `${publicUrl}${cleanPath}`;
};

export default getAssetUrl;

