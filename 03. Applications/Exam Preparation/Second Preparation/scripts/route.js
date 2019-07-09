const handlers = {};

$(() => {
  const app = Sammy("#root", function() {
    this.use("Handlebars", "hbs");

    //home
    this.get("#/home", handlers.getHome);

    //user
    //register
    this.get("#/register", handlers.getRegister);
    this.post("#/register", handlers.registerUser);
    //login
    this.get("#/login", handlers.getLogin);
    this.post("#/login", handlers.loginUser);
    //logout
    this.get("#/logout", handlers.logoutUser);

    //songs
    this.get("#/getSong/:id", handlers.getSong);
    this.get("#/allSongs", handlers.getAllSongs);
    //createSong
    this.get("#/createSong", handlers.getCreateSong);
    this.post("#/createSong", handlers.createSong);

    //mySong
    this.get("#/mySongs", handlers.getMySongs);

    //removeSong
    this.get("#/removeSong/:id", handlers.removeSong);

    //likes
    this.get("#/likeSong/:id", handlers.likeSong);

    //playSong
    this.get("#/playSong/:id", handlers.listenSong);
  });

  app.run("#/home");
});
