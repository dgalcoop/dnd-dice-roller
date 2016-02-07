//Publish all rolls.
Meteor.publish('allRolls', function() {
	return Rolls.find();
});
