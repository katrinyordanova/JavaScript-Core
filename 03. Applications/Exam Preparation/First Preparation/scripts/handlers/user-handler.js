handler.getRegister = function(context) {
  context
    .loadPartials({
      header: "/views/common/header.hbs",
      footer: "/views/common/footer.hbs"
    })
    .then(function() {
      this.partial("/views/user/register.hbs");
    })
    .catch(function() {
        notify.handleError(error);
      });
};

handler.registerUser = function(context) {
  let {username, password} = context.params;

  if (username.length < 3) {
    notify.showError("Username must be at least 3 symbols");
    return;
  } else if (password.length < 6) {
    notify.showError("Password must be at least 6 symbols");
    return;
  } else {
    userService.register(username, password).then((response) => {
      userService.saveSession(response);
      notify.showInfo("User registration successful.");
      context.redirect("#/home");
    })
    .catch(function() {
        notify.handleError(error);
      });
  }
};

handler.getLogin=function(context){
    context
    .loadPartials({
      header: "/views/common/header.hbs",
      footer: "/views/common/footer.hbs"
    })
    .then(function() {
      this.partial("/views/user/login.hbs");
    })
    .catch(function() {
        notify.handleError(error);
      });
}

handler.loginUser=function(context){
    let {username, password}=context.params;

    userService.login(username, password)
    .then((response) => {
        userService.saveSession(response);
        notify.showInfo('Login successful.');
        context.redirect('#/home');
    }).catch(function() {
        notify.handleError(error);
    });
}

handler.logoutUser=function(context){
    userService.logout()
    .then(() => {
      sessionStorage.clear();
      notify.showInfo('Logout successful.');
      context.redirect('#/home');
    }).catch(function() {
      notify.handleError(error);
  });
}
