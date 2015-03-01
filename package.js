Package.describe({
  name: 'strawlab:meteor-tiff',
  version: '0.0.1',
  summary: 'A meteor wrapper for seikichi/tiff.js',
  git: 'https://github.com/strawlab/strawlab-meteor-tiff.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('tiff.min.js');
});

Package.onTest(function(api) {
});
