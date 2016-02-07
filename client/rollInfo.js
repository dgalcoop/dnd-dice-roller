Template.rollInfo.events({
	'click .deleteRoll': function(e) {
		e.preventDefault();
		console.log('Removed ' + this._id);
		
		Rolls.remove(this._id);
	}
});