Template.newRoll.events({
	'click #createRoll': function(e) {
		e.preventDefault();
		var rollName = $('#rollName').val();
		var diceType = $('#diceType').val();
		var diceAmount = $('#diceAmount').val();
		var damageType = $('#damageType').val();
		var modifier = $('#modifier').val();


		Rolls.insert({
			rollName: rollName,
			damageType: damageType,
			diceAmount: diceAmount,
			diceType: diceType,
			modifier: modifier,
		});
		Router.go('/');
	}
});

Template.newRoll.events({
	'click .cancelRoll': function(e) {
		e.preventDefault();
		Router.go('/');s
		console.log('butts'); 
	}
});
