Template.profile.created = function () {
  	this.autorun(function () {
    	this.subscription = Meteor.subscribe('userProfile');
  	}.bind(this));
};


Template.profile.rendered = function () {
	this.autorun(function () {
		if (!this.subscription.ready()) {
      		IonLoading.show();
    	} else {
      		IonLoading.hide();
    	}
  	}.bind(this));
};


Template.profile.helpers({
  username: function() {
    return Meteor.users.findOne({_id: Meteor.userId()}, {fields: {username: 1}}).username;
  },
  firstName: function() {
    var firstName = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {'profile.firstName': 1}}).firstName;

    if (firstName) {
      return false
    } else {
      return firstName
    };
  },
  lastName: function() {
    var lastName = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {'profile.lastName': 1}}).lastName;

    if (!lastName) {
      return false
    } else {
      return lastName
    };
  }
});


Template._editName.events({
  'submit form#editName': function(event, template) {
    event.preventDefault();
    console.log('Submitted');
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userId = Meteor.userId();

    if (firstName.length > 1 && lastName.length > 1) {
      Meteor.call('editName', firstName, lastName, userId, function(error) {
        if (error) {      
          throw new Error(error.reason);
        } else {
          IonModal.close();
          IonKeyboard.close();
        }
      });
    } else {
      throw new Error('You must enter a longer name!');
    }
  }
});


