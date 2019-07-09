handlers.getAllSongs = async function(context) {
  context.isAuth = userService.isAuth();
  context.username = sessionStorage.getItem("username");

  try {
    let songs = await songService.getSongs();
    let userId = sessionStorage.getItem("id");
    songs.forEach(song => (song.isCreator = song._acl.creator === userId));
    context.songs = songs;

    context
      .loadPartials({
        header: "/views/common/header.hbs",
        footer: "/views/common/footer.hbs",
        song: "/views/songs/song.hbs"
      })
      .then(function() {
        this.partial("/views/songs/allSongs.hbs");
      });
  } catch (error) {
    console.log(error);
  }
};

handlers.getCreateSong = function(context) {
  context.isAuth = userService.isAuth();
  context.username = sessionStorage.getItem("username");

  context
    .loadPartials({
      header: "/views/common/header.hbs",
      footer: "/views/common/footer.hbs"
    })
    .then(function() {
      this.partial("/views/songs/createSong.hbs");
    });
};

handlers.createSong = function(context) {
  let title = context.params.title;
  let artist = context.params.artist;
  let imageUrl = context.params.imageURL;

  if (
    (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) &&
    title.length >= 6 &&
    artist.length >= 3
  ) {
    songService.createSong(title, artist, imageUrl).then(() => {
      notify.showInfo("Song created successfully.");
      context.redirect("#/allSongs");
    });
  }
};

handlers.getMySongs = function(context) {
  context.isAuth = userService.isAuth();
  context.username = sessionStorage.getItem("username");

  songService.getAllMySongs().then(function(response) {
      let userId=sessionStorage.getItem('id');
    response.forEach((song) => song.isCreator= song._acl.creator === userId);
    context.songs=response;

    context.loadPartials({
        header: "/views/common/header.hbs",
        footer: "/views/common/footer.hbs",
        song: "/views/songs/mySongs.hbs"
      })
      .then(function() {
        this.partial("/views/songs/mySongs.hbs");
      })
  });
};


handlers.removeSong=function(context){
    songService.removeSong(context.params.id)
    .then(function () {
        notify.showInfo('Song removed successfully');
        context.redirect('#/allSongs')
    }).catch(function (error){
        console.log(error);
    });
}

handlers.likeSong =async function(context) {
    let id=context.params.id;

    try {
    let song=await songService.getSong(id);
    let newLikes=Number(song.likes)+1;
    song.likes=newLikes;

    songService.likeSong(id, song).then(function(){
        notify.showInfo('Liked!');
        context.redirect('#/allSongs');
    }).catch(function(error){
        console.log(error);
    });
    } catch (error) {
        console.log(error);
    }
    
}

handlers.listenSong=async function(context){
    let id=context.params.id;
    
    try {
    let song=await songService.getSong(id);
    let listenedTimes=Number(song.listened)+1;
    song.listened=listenedTimes;

    songService.listenSong(id, song)
    .then(function (){
        notify.showInfo(`You just listened to ${song.title}`);
        context.redirect('#/allSongs');
    }).catch(function(error){
        console.log(error);
    })
    } catch (error) {
        console.log(error);
    }
}