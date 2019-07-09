const handlers={};

$(() => {
    const app=Sammy('#root', function(){
        this.use('Handlebars', 'hbs');

        //home
        this.get('#/home', handlers.getHome);

        //user
         //register
        this.get('#/register', handlers.getRegister);
        this.post('#/register', handlers.registerUser);
         //login
         this.get('#/login', handlers.getLogin);
         this.post('#/login', handlers.loginUser);
         //logout
         this.get('#/logout', handlers.logoutUser);

    });

    app.run('#/home');
});
