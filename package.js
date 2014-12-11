var profile = {
	location: '.',
	resourceTags: {
		amd: function (filename) {
			return /\/lib\/(?:links|validate)\.js$/.test(filename);
		}
	}
};
