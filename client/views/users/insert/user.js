Meteor.subscribe('users_form');
Template.User.helpers({


});

Template.User.events({
  
    'submit' (event){
      event.preventDefault();
      var first_name = event.target.first_name.value;
      var last_name = event.target.last_name.value;
      var password = event.target.password.value;
      var email = event.target.email.value;

      var user = {
        name: first_name + " " + last_name,
        password: password,
        email: email 
      }

      Meteor.call('UsersForm.insert',user);

      console.log("Person: ", user);
      event.target.first_name.value = "";
      event.target.last_name.value = "";
      event.target.password.value = "";
      event.target.email.value = "";
    }
});