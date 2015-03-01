// Setup for EasySearch

EasySearch.createSearchIndex('chatIndex', {
	'field': ['usernames', 'name', 'lastMessage'], 
	'collection': Chat,
	'use': 'mongo-db',
	// 'query': function (searchString) {
	//     var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
	//     var user = Meteor.users.findOne(this.publishScope.userId);

	//     query['profile.name'] = { $ne: user.profile.name };
	//     return query;
	// },
	// 'limit': 5
});


EasySearch.createSearchIndex('userIndex', {
	'field': 'username', 
	'collection': Meteor.users,
	'use': 'mongo-db',
	'returnFields': ['username'],
	// 'query': function (searchString) {
	//     var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
	//     var user = Meteor.users.findOne(this.publishScope.userId);

	//     query['profile.name'] = { $ne: user.profile.name };
	//     return query;
	// }
	'limit': 15
});