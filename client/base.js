Template.base.helpers({
  allRolls: function() {
    return Rolls.find();
  }
});

Template.base.events({
	'click .createRoll': function(e) {
		e.preventDefault();

		Rolls.insert({
			rollName: 'Warhammer',
			rollDamage: 'Radiant',
			diceAmount: 4,
			diceType: 4,
			modifier: 3
		});
	}
});