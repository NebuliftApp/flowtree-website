// The public FlowTree download. While `downloadUrl` is empty the site shows
// "Beta coming soon" everywhere instead of a download. The release skill sets
// both values when a build is published.
export const version = '0.4.7';
export const downloadUrl = 'https://github.com/NebuliftApp/flowtree-website/releases/download/v0.4.7/FlowTree.dmg';

export const downloadAvailable = downloadUrl !== '';
export const downloadLabel = downloadAvailable ? 'Download' : 'Beta coming soon';
