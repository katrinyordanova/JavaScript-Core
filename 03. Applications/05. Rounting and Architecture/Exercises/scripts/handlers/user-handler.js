handlers.getRegister=function(context){
  context.loadPartials({
      header:'./templates/common/header.hbs',
      footer:'./templates/common/footer.hbs'
  }).then(function () {
      this.partial('./templates/register.hbs');
  }).catch(function (error) {
      console.log(error);
  })
};

handlers.registerUser=function(context) {
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.repeatPassword;

    if (password !== repeatPassword){
        notifications.showError('Passwords must mach!');
        return;
    }
    userService.register(username, password)
        .then((response) => {
            userService.saveSession(response);
            notifications.showSuccess('Successfully registered');
            context.redirect('#/home');
        });
};

handlers.getLogin=function(context){
  context.loadPartials({
      header:'./templates/common/header.hbs',
      footer:'./templates/common/footer.hbs'
  }).then(function () {
      this.partial('./templates/login.hbs');
  }).catch(function (error) {
      console.log(error);
  })
};

handlers.loginUser=function (context) {
    let username=context.params.username;
    let password=context.params.password;

    userService.login(username,password)
        .then((response) => {
            userService.saveSession(response);
            notifications.showSuccess('Successfully logged in!');
            context.redirect('#/home');
        }).catch(function (error) {
        notifications.showError('User does not exist');
        //notifications.showError(error.responseJSON.description);
    });
};

handlers.logoutUser=function (context) {
userService.logout()
    .then(() => {
       sessionStorage.clear();
       notifications.showSuccess('Logged out');
       context.redirect('#/home');
    });
};

