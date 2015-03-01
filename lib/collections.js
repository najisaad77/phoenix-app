Chat = new Meteor.Collection('chat');

Messages = new Meteor.Collection('messages');

News = new Meteor.Collection('news');




Schema = {};

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        max: 8,
        optional: false
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: false
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date,
        optional: false
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    }
});


Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    sex: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    grade: {
        type: String,
        allowedValues: ['Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'IB 1', 'IB 2'],
        optional: true
    },
    country: {
        type: String,
        optional: true
    },
    hostel: {
        type: String,
        allowedValues: ['Ekukulweni', 'Esiveni', 'Emhlabeni', 'Elangeni'],
        optional: true
    },
    house: {
        type: String,
        allowedValues: ['Guedes', 'Henderson', 'Stern'],
        optional: true
    },
});


Meteor.users.attachSchema(Schema.User);


Schema.Chat = new SimpleSchema({
    name: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    userIds: {
        type: [String],
        minCount: 2
    },
    usernames: {
        type: [String],
        minCount: 2
    },
    dateUpdated: {
        type: Date,
        optional: false
    },
    lastMessage: {
        type: String,
        optional: true
    }
});

Chat.attachSchema(Schema.Chat);



Schema.Messages = new SimpleSchema({
    convoId: {
        type: String,
        optional: false
    },
    content: {
        type: String,
        // regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: false,
        min: 1
    },
    userId: {
        type: String,
        optional: false
    },
    username: {
        type: String,
        optional: false
    },
    dateCreated: {
        type: String,
        optional: false
    },
    read: {
        type: Boolean,
        optional: false
    }
});

Messages.attachSchema(Schema.Messages);



Schema.News = new SimpleSchema({
    headline: {
        type: String,
        // regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: false,
        min: 1
    },
    content: {
        type: String,
        // regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: false,
        min: 1
    },
    userId: {
        type: String,
        optional: false
    },
    username: {
        type: String,
        optional: false
    },
    dateCreated: {
        type: String,
        optional: false
    },
    dateDue: {
        type: String,
        optional: false
    }
});

News.attachSchema(Schema.News);

