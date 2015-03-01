// Template.tabsLayout.rendered = function () {
//   Session.set('currentTab', 'tabs.one');
// };



// Template.tabsRecent.created = function () {
//   	this.autorun(function () {
//     	this.subscription = Meteor.subscribe('userConvos');
//   	}.bind(this));
// };


// Template.tabsRecent.rendered = function () {
// 	this.autorun(function () {
// 		if (!this.subscription.ready()) {
//       		IonLoading.show();
//     	} else {
//       		IonLoading.hide();
//     	}
//   	}.bind(this));
// };


// Template.tabsRecent.helpers({
// 	convos: function() {
// 		return Convos.find({}, {sort: {dateUpdated: -1}});
// 	}
// });


// Template._convoNew.events({
// 	'submit #new-convo-form': function(event) {
// 		event.preventDefault();
// 		var partnerUser = document.getElementById('partner-user').value.trim().toLowerCase();
// 		var form = document.getElementById('new-convo-form');
// 		Meteor.call('newConvo', partnerUser, function(error) {
//     		if (error) {
//         		var errorReason = error.reason;       
//           		throw new Error('Hello. ' + errorReason);
//     		} else {
//     			IonModal.close();
//     		}
//     	});
// 	}
// });




// Template.chatShow.created = function () {
//   	this.autorun(function () {
//     	this.subscription = Meteor.subscribe('userMessages');
//   	}.bind(this));
// };


// Template.chatShow.rendered = function () {
// 	this.autorun(function () {
// 		if (!this.subscription.ready()) {
//       		IonLoading.show();
//     	} else {
//       		IonLoading.hide();
//     	}
//   	}.bind(this));
//   	// getElementById('messages-cntr').scrollTop(getElementById('messages-cntr').prop("scrollHeight"));
// };


// Template.chatShow.helpers({
//   	messages: function() {
// 		var convoId = Session.get('selectedConvo');
// 		return Messages.find({convoId: Router.current().params._id}, {sort: {dateCreated: -1}});
// 	},
// 	username: function() {
// 		var messageId = this._id;
// 		console.log(messageId);
// 		var userId = Messages.findOne({_id: messageId}, {fields: {userId: 1}}).userId;
// 		var username = Meteor.users.findOne({_id: userId}, {fields: {username: 1}}).username;

// 		return username;
// 	},
// 	name: function() {
// 		var name = Convos.findOne({_id: Router.current().params._id}, {fields: {name: 1}}).name;
// 		var usernames = Convos.findOne({_id: Router.current().params._id}, {fields: {usernames: 1}}).usernames;
// 		console.log(usernames);

// 		if (!name) {
// 			return usernames;
// 		} else {
// 			return name;
// 		}
// 	}
// });


// Template.chatShow.events({
// 	'submit #send-message': function(event) {
// 		event.preventDefault();
// 		// get message content by name attribute and insert into Messages database
// 		var currentConvoId = Router.current().params._id;
// 		var messageContentVar = document.getElementById('message-content').value;
// 		var currentUserId = Meteor.userId();
		
// 		if (messageContentVar != '') {
// 			Meteor.call('writeMessage', messageContentVar, currentConvoId, currentUserId);

// 			//clear the field and variable after successful submit
// 			document.getElementById('message-content').value = '';
// 			messageContentVar.value = '';
// 		}
// 	}
// });