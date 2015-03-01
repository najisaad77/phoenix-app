Template.sidemenu.events({
	'click [data-action=settings]': function(event, template) {
		// AccountsTemplates.logout(function () {
			Router.go('settings');
		// });
	},
	'click [data-action=chat]': function(event, template) {
		Router.go('chat.recent');
	},
	'click [data-action=news]': function(event, template) {
		Router.go('news.recent');
	}
})


Template.ionNavBar.events({
	'click [data-action=logoutActionSheet]': function (event, template) {
    	IonActionSheet.show({
      		titleText: 'Are you sure you want to log out?',
      		buttons: [],
      		destructiveText: 'Log me out!',
      		cancelText: 'Cancel',
      		cancel: function() {},
      		buttonClicked: function(index) {
		        if (index === 0) {}
		        if (index === 1) {}
		        return true;
		    },
      		destructiveButtonClicked: function() {
        		AccountsTemplates.logout(function () {
					// Router.go('login');
				});
      		}
    	});
  	}
});