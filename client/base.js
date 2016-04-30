Template.base.helpers({
  allRolls: function() {
    return Rolls.find();
  },
});

Template.base.finalResult = function() {
	return Session.get('finalResult');
};

Template.base.damageType = function() {
	return Session.get('damageType')
}