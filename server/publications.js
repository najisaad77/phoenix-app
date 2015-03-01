// publish conversations (for each user individually)
Meteor.publish('userChat', function() {
	var currentUserId = this.userId;

	if(!this.userId) { 
		return null
	} else {
		return Chat.find({userIds: {$in: [currentUserId]}});
	}
});


Meteor.publish('userMessages', function() {
	var currentUserId = this.userId;

	if(!this.userId) { 
		return null
	} else {
		return Messages.find();
	}
});


Meteor.publish('userProfile', function() {
	if(!this.userId) { 
		return null
	} else {
		return Meteor.users.find({_id: this.userId}, {fields: {username: 1, 'profile.firstName': 1, 'profile.lastName': 1}});
	}
});


Meteor.publish('userNews', function() {
	if(!this.userId) { 
		return null
	} else {
		return News.find();
	}
});


// // publish usernames
// Meteor.publish('userSearch', function() {
// 	return Meteor.users.find({}, {fields: {'profile.firstName': 1, 'profile.lastName': 1, username: 1}});
// });