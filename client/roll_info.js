Template.rollInfo.events({
	'click .deleteRoll': function(e) {
		e.preventDefault();
		console.log('Removed ' + this._id);
		
		Rolls.remove(this._id);
	}
});
Template.rollInfo.events({
	'click .rollRoll': function(e) {
		e.preventDefault();
		var sides = parseInt(this.diceType.replace(/\D/g, ''));
		var iter = this.diceAmount;
		//need to inclue a loop here for # of dx
		var totalDiceRoll = 0;
		for (i = 0; i < iter; i++) {
			var rollResult = Math.floor(Math.random() * sides + 1);
			totalDiceRoll += rollResult;
		}
		var finalResult = totalDiceRoll + parseInt(this.modifier);
		console.log(finalResult);
	}
});







// 			rollName: rollName,
// 			damageType: damageType,
// 			diceAmount: diceAmount,
// 			diceType: diceType,
// 			modifier: modifier