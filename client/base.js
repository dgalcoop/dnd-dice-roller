Template.base.helpers({
  allRolls: function() {
    return Rolls.find();
  },
  postedResult: function() {
  	return finalResult;
  }
});