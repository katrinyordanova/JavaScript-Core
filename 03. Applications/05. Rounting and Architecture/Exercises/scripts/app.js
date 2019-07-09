const handlers = {};

$(() => {
   const app=Sammy('#root', function () {
        this.use('Handlebars', 'hbs');

        //home route
       this.get('/index.html', handlers.getHome);
       this.get('/', handlers.getHome);
       this.get('#/home', handlers.getHome);

       //user routes
       this.get('#/register', handlers.getRegister);
       this.post('#/register',handlers.registerUser);
       this.get('#/login', handlers.getLogin);
       this.post('#/login', handlers.loginUser);
       this.get('#/logout', handlers.logoutUser);

       //posts routes
       //this.post('#/posts/delete/:id', handlers.deletePosts);
   });

   app.run();
});