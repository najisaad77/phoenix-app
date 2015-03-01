Template.UsersDetail.events({
    'submit form#edit-user': function(e, tmpl) {
        e.preventDefault();

        var firstName = tmpl.find('input[name=firstname]').value;
        var lastName = tmpl.find('input[name=lastname]').value;
        var userId = Meteor.userId();
        console.log(firstName,  lastName, userId);

        Meteor.call('editName', userId, firstName, lastName, function(error) {
            if (error) {
                throw new Error(error.reason);
            } else {
                Router.go('users.detail', {
                    _id: userId
                });
            }
        });
    }
});
Template.UsersDetail.helpers({
    currUser: function() {
        return Meteor.users.findOne({
            _id: Meteor.userId()
        });
    }
});