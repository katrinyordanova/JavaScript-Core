$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('#/home',function () {
            isLoggedIn(context);

            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            })
        });

        //About
        this.get('#/about',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs');
            })
        });

        //GET Register
        this.get('#/register',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                registerForm:'./templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs');
            })
        });

        //POST Register
        this.post('#/register',function (context) {
            let that=this;
            let {username,password,repeatPassword}=context.params;
            auth.register(username,password,repeatPassword)
                .then(function (result) {
                    auth.saveSession(result);
                    auth.showInfo('Successfully Registered!');
                    that.redirect('#/login');
                })
        });

        //GET Login
        this.get('#/login',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                loginForm:'./templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            })
        });

        //POST Login
        this.post('#/login',function (context) {
            let that=this;
            let {username,password}=context.params;
            auth.login(username,password)
                .then(function (result){
                    auth.saveSession(result);
                    auth.showInfo('Login successful.');
                    that.redirect('#/home');
                });
        });

        //Logout
        this.get('#/logout',async function () {
            let result=await auth.logout();
            sessionStorage.clear();
            this.showInfo('Logged out.');
            this.redirect('#/home');
        });

        //GET Catalog
        this.get('#/catalog',function () {
            let that=this;
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                team:'./templates/catalog/team.hbs'
            }).then(function () {
                teamsService.loadTeams()
                    .then(function (teams) {
                        context.teams=teams;
                        context.hasNoTeam=teams;
                        that.partial('./templates/catalog/teamCatalog.hbs')
                    })
            })
        });

        //GET Create
        this.get('#/create',function () {
            isLoggedIn(context);
            this.loadPartials({
                header:'./template/common/header.hbs',
                footer:'./template/common/footer.hbs',
                createForm:'./template/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            });
        });

        //POST Create
        this.post('#/create',function (context) {
            isLoggedIn(context);

            let that=this;
            teamsService.createTeam(context.params.name, context.params.comment)
                .then(function (teamInfo) {
                    sessionStorage.setItem('teamId',teamInfo._id);
                    auth.showInfo(`Team ${teamInfo.name} was created successfully!`);
                    this.redirect('#/catalog');
                }).catch(function () {
                    auth.showError('Team wa not created!');
            });
        });

    });

    app.run('#/home');
});

function isLoggedIn(context) {
    context.loggedIn=!!sessionStorage.getItem('authtoken');
    context.username=sessionStorage.getItem('username');
}