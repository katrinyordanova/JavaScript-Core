handlers.getRegister=function(context){
    context.loadPartials({
        header: '/views/common/header.hbs',
        footer: '/views/common/footer.hbs'
    }).then(function() {
        this.partial('/views/user/register.hbs');
    });
}

handlers.registerUser=function(context){
    let username=context.params.username;
    let password=context.params.password;
    
    if(username.length>=3 && password.length>=6){
        userService.register(username,password)
    .then((response) => {
        userService.saveSession(response);
        notify.showInfo('User registration successful.');
        context.redirect('#/home');
    }).catch(function (error) {
        notify.showError(error);
    });
    }else{
        notify.showError('Username or password is too short');
    }
}

handlers.getLogin=function(context){
    context.loadPartials({
        header: '/views/common/header.hbs',
        footer: '/views/common/footer.hbs'
    }).then(function() {
        this.partial('/views/user/login.hbs');
    }).catch(function(error) {
        notify.showError(error);
    });
}

handlers.loginUser=function(context){
    let username=context.params.username;
    let password=context.params.password;

    userService.login(username,password)
    .then((response) => {
        userService.saveSession(response);
        // username='';
        // password='';
        notify.showInfo('Login successful');
        context.redirect('#/home');
    }).catch(function(error) {
        // username='';
        // password='';
        notify.showError('Invalid username or password');
    });
}

handlers.logoutUser=function(context){
    userService.logout().then(() => {
        sessionStorage.clear();
        notify.showInfo('Logout successful');
        context.redirect('#/login');
    });
}