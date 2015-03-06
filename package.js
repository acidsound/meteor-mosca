Package.describe({
  name: 'spectrum:mosca',
  version: '0.0.1',
  summary: 'Mosca MQTT brocker for Meteor',
  git: 'https://github.com/acidsound/meteor-mosca',
  documentation: 'README.md'
});

Npm.depends({
	"mosca": "0.28.1"
})

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('mosca.js', "server");
  api.export("mosca");
});
