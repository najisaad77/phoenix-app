// Template.newProfile.events({
//   'submit #new-profile': function(event) {
//     event.preventDefault();
//     var email = Session.get('email');
//     var password = Session.get('password');
//     var firstName = document.getElementById('first-name').value;
//     var lastName = document.getElementById('last-name').value;
//     var username = firstName.toLowerCase().substring(0, 4) + lastName.toLowerCase().substring(0, 4);
//     var grade = document.getElementById('grade').value;
//     Accounts.createUser({
//       email: email, 
//       password: password, 
//       firstName: firstName, 
//       lastName: lastName, 
//       username: username, 
//       grade: grade}, 
//       function(error) {
//         if (error) {
//           var errorReason = error.reason;       
//           throw new Error('Sorry mate, you could not be registered. ' + errorReason);
//           } else {
//           // Success. Account has been created and the user has logged in successfully.
//           Router.go('chat')
//         }
//       }
//     );
//   }
// });



// Template.profile.events({
//   'submit #profile-form-two': function(event) {
//     event.preventDefault();
//     var country = document.getElementById('country').value;
//     var hostel = document.getElementById('hostel').value;
//     var house = document.getElementById('house').value;
//     var sex = document.querySelector('input[name="sex"]:checked').value;
//     Meteor.call('completeProfile', country, hostel, house, sex, function(error) {
//         if (error) {
//           var errorReason = error.reason;       
//           throw new Error('Sorry mate, something went wrong. ' + errorReason);
//           } else {
//           Router.go('chat')
//         }
//       }
//     );
//   }
// });




AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
      maxLength: 8,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  }
]);


AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    // enablePasswordChange: true,
    // forbidClientAccountCreation: false,
    // overrideLoginErrors: true,
    // sendVerificationEmail: false,
    lowercaseUsername: true,

    // Appearance
    // showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/chat/recent',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,

    // Texts
    // texts: {
    //   button: {
    //       signUp: "Register Now!"
    //   },
    //   socialSignUp: "Register",
    //   socialIcons: {
    //       "meteor-developer": "fa fa-rocket"
    //   },
    //   title: {
    //       forgotPwd: "Recover Your Passwod"
    //   },
    // },
});

