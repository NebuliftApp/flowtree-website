// The public FlowTree download. While `downloadUrl` is empty the site shows
// "Beta coming soon" everywhere instead of a download. The release skill sets
// both values when a build is published.
export const version = '0.4.4';
export const downloadUrl = '';

export const downloadAvailable = downloadUrl !== '';
export const downloadLabel = downloadAvailable ? 'Download' : 'Beta coming soon';
