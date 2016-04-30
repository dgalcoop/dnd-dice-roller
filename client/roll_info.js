
Template.rollInfo.events({
	'click .deleteRoll': function(e) {
		e.preventDefault();
		var confirmation = confirm("Do you want to delete this roll");
		if (!confirmation) {
			return false;
		} else {
			console.log('Removed ' + this._id);
			Rolls.remove(this._id);
		}
	}
});

Template.rollInfo.events({
	'click .rollRoll': function(e) {
		e.preventDefault();
		var sides = parseInt(this.diceType.replace(/\D/g, ''));
		var iter = this.diceAmount;
		var damageType = this.damageType;
		//need to inclue a loop here for # of dx
		var totalDiceRoll = 0;
		for (i = 0; i < iter; i++) {
			var rollResult = Math.floor(Math.random() * sides + 1);
			totalDiceRoll += rollResult;
		}
		finalResult = totalDiceRoll + parseFloat(this.modifier);
		if (finalResult < 0) {
			finalResult = 0;
		}
		Session.set('damageType', damageType);
		Session.set('finalResult', finalResult);
	}
});





// 			rollName: rollName,
// 			damageType: damageType,
// 			diceAmount: diceAmount,
// 			diceType: diceType,
// 			modifier: modifier
