Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('base', {
		path: '/'
	});

});