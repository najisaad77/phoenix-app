Template._newConvo.helpers({
  indexes: function() {
    return ['chatIndex', 'userIndex'];
  }
});


Template._newConvo.events({
  'click a': function (event, template) {
    IonModal.close();
  },
  'click .new-convo': function(event, template) {
    var partnerUserId = this._id;

    Meteor.call('newConvo', partnerUserId, function(error) {
        if (error) {
            var errorReason = error.reason;       
              throw new Error('Hello. ' + errorReason);
        } else {
          IonModal.close();
        }
      });
  }
});