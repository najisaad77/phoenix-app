// global default options
Router.configure({
	layoutTemplate: 'neutralLayout',
});


Router.plugin('ensureSignedIn', {
    except: ['login', 'atSignUp', 'atForgotPassword']
});


AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'login',
    layoutTemplate: 'outsideLayout',
});



// Outside refers to all the pages that can be accessed without being logged in.

Router.route('/', {
	name: 'login'
});



// Inside refers to all the pages that require the user to be logged in.

Router.route('/settings', {
  name: 'settings',
});

Router.route('/settings/disclaimer', {
  name: 'disclaimer',
});

Router.route('/settings/acknowledgements', {
  name: 'acknowledgements',
});

Router.route('/settings/profile', {
  name: 'profile',
});

Router.route('/settings/profile/name', {
  name: 'editName',
});

Router.route('/settings/profile/test', {
  name: 'users.detail',
});




Router.route('/chat/recent', {
  name: 'chat.recent',
  layoutTemplate: 'tabsChat',
});

Router.route('/chats/:_id', {
  name: 'chat.show',
  layoutTemplate: 'tabsChat',
});

Router.route('/chat/groups', {
  name: 'chat.groups',
  layoutTemplate: 'tabsChat',
});

Router.route('/chat/search', {
  name: 'chat.search',
  layoutTemplate: 'tabsChat',
});



Router.route('/news/recent', {
  name: 'news.recent',
  layoutTemplate: 'tabsNews',
});



// Router.route('/users/:_id', {
//   name: 'user.show'
// });



// Router.route('/convos/:_id', function() {
// 	// if (! Meteor.userId()) {
// 	// 	this.render('login');
// 	} else {
// 		this.render('messageList');
// 	}
// }, {
// 	name: 'messages'
// });