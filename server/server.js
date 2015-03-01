Meteor.methods({
	'newConvo': function(partnerUserId) {
		var currentUserId = this.userId;
		var time = moment().format();
		var partnerUser = Meteor.users.findOne({_id: partnerUserId}, {fields: {_id: 0, username: 1}}).username;
		var currentUser = Meteor.users.findOne({_id: currentUserId}, {fields: {username: 1, _id: 0}}).username;

  		Chat.insert({
			userIds: [currentUserId, partnerUserId],
			usernames: [currentUser, partnerUser],
			dateUpdated: time,
			lastMessage: 'Write the first message!'
		});
	},
	'deleteConvo': function(currentConvoId) {
		Chat.remove({_id: currentConvoId});
	},
	'writeMessage': function(messageContentVar, currentConvoId, currentUserId) {
		var time = moment().format();
		var convoUserIds = Chat.findOne({_id: currentConvoId}, {fields: {userIds: 1, _id: 0}}).userIds;
		var username = Meteor.users.findOne({_id: this.userId}, {fields: {username: 1,}}).username;
		
		Messages.insert({
			content: messageContentVar,
			userId: currentUserId,
			username: username,
			convoId: currentConvoId,
			dateCreated: time,
			read: false
		});
		Chat.update(currentConvoId, {$set: {
			dateUpdated: time, 
			lastMessage: messageContentVar
		}});
	},
	'editName': function(userId, firstName, lastName) {
        Meteor.users.update({_id: userId}, {$set: {
            'profile.firstname': firstName,
            'profile.lastname': lastName
        }});
	}//,
	// 'completeProfile': function(country, hostel, house, sex) {
	// 	var currentUserId = this.UserId;

	// 	Meteor.users.update({_id: currentUserId}, {$set: {
	// 		country: country,
	// 		hostel: hostel,
	// 		house: house,
	// 		sex: sex
	// 	}});
	// }
});

