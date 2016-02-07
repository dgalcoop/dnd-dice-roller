Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('base', {
		path: '/',
		waitOn: function() {
			//Subscirbing to all rolls
			return Meteor.subscribe('allRolls');
		}
	});

});

 