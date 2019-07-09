handlers.getHome=function(context){
    context.isAuth=userService.isAuth();
    context.username=sessionStorage.getItem('username');
    if (userService.isAuth()){
        //this is for the posts
        // postsService.getAllPosts().then((posts) => {
        //     context.posts=posts;
        //     context.loadPartials({
        //         header:'./templates/common/header.hbs',
        //         footer:'./templates/common/footer.hbs',
        //         posts:'./templates/posts.hbs'
        //     }).then(function () {
        //         this.partial('./templates/home.hbs')
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // });
    } else{
        context.loadPartials({
            header:'./templates/common/header.hbs',
            footer:'./templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/home.hbs')
        }).catch(function (error) {
            console.log(error);
        });
    }

};
