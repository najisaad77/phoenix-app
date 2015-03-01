Template.tabsNews.rendered = function () {
  Session.set('currentTab', 'news.upcoming');
};



Template.newsUpcoming.created = function () {
  	this.autorun(function () {
    	this.subscription = Meteor.subscribe('userNews');
  	}.bind(this));
};


Template.newsUpcoming.rendered = function () {
	this.autorun(function () {
		if (!this.subscription.ready()) {
      		IonLoading.show();
    	} else {
      		IonLoading.hide();
    	}
  	}.bind(this));
};


Template.newsUpcoming.helpers({
	convos: function() {
		return News.find({}, {sort: {dateUpdated: -1}});
	}
});




// Template.newsShowUpcoming.created = function () {
//   	this.autorun(function () {
//     	this.subscription = Meteor.subscribe('userChat');
//     	this.subscription = Meteor.subscribe('userMessages');
//   	}.bind(this));
// };


// Template.newsShowUpcoming.rendered = function () {
// 	this.autorun(function () {
// 		if (!this.subscription.ready()) {
//       		IonLoading.show();
//     	} else {
//       		IonLoading.hide();
//     	}
//   	}.bind(this));
//   	// getElementById('messages-cntr').scrollTop(getElementById('messages-cntr').prop("scrollHeight"));
// };


// Template.newsShowUpcoming.helpers({
//   	messages: function() {
// 		return Messages.find({convoId: Router.current().params._id}, {sort: {dateCreated: -1}});
// 	},
// 	name: function() {
// 		var name = Chat.findOne({_id: Router.current().params._id}, {fields: {name: 1}}).name;
// 		var usernames = Chat.findOne({_id: Router.current().params._id}, {fields: {usernames: 1}}).usernames;

// 		if (name) {
// 			return name;
// 		} else {
// 			return usernames;
// 		}
// 	}
// });


// Template.newsShowUpcoming.events({
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


// Template._chatPopover.events({
// 	'click [data-action=showActionSheet]': function (event, template) {
//     	IonActionSheet.show({
//       		titleText: 'Are you sure you want to delete this conversation?',
//       		buttons: [],
//       		destructiveText: 'Delete',
//       		cancelText: 'Cancel',
//       		cancel: function() {
//         		console.log('Cancelled!');
//       		},
//       		buttonClicked: function(index) {
// 		        if (index === 0) {
// 		          console.log('Shared!');
// 		        }
// 		        if (index === 1) {
// 		          console.log('Moved!');
// 		        }
// 		        return true;
// 		    },
//       		destructiveButtonClicked: function() {
//         		var currentConvoId = Router.current().params._id;
//         		Meteor.call('deleteConvo', currentConvoId, function(error) {
// 	    			if (error) {
// 	        			var errorReason = error.reason;       
// 	          			throw new Error('Hello. ' + errorReason);
// 	    			} else {
// 	    				Router.go('tabs.recent');
// 	    			}
// 	    		});
//       		}
//     	});
//   	}
// });