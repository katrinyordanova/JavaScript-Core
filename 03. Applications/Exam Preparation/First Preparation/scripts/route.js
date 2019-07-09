const handler={};

$(() => {
    const app=Sammy('#root', function(){
        this.use('Handlebars', 'hbs');

        //home
        this.get('#/home', handler.getHome);

        //register
        this.get('#/register', handler.getRegister);
        this.post('#/register', handler.registerUser);

        //login
        this.get('#/login', handler.getLogin);
        this.post('#/login', handler.loginUser);

        //logout
        this.get('#/logout', handler.logoutUser);

        //dashboard
        this.get('#/getAllPets(/:category)?', handler.getAllPets);

        //createPet
        this.get('#/createPet', handler.getCreatePet);
        this.post('#/createPet', handler.createPet);

        //myPets
        this.get('#/myPets', handler.getMyPets);

        //petPet
        this.post('#/petPet/:id', handler.petPet);

        //removePet
        this.get('#/removePet/:id', handler.removePet);
    });

    app.run('#/home');
});