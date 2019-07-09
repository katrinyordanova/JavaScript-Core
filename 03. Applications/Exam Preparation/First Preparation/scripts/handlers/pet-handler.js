handler.getCreatePet = function(context) {
  context.isAuth = userService.isAuth();
  context.username = sessionStorage.getItem("username");

  context
    .loadPartials({
      header: "/views/common/header.hbs",
      footer: "/views/common/footer.hbs"
    })
    .then(function() {
      this.partial("/views/pet/createPet.hbs");
    })
    .catch(function() {
      notify.handleError(error);
    });
};

handler.createPet = function(context) {
  let { name, description, imageURL, category } = context.params;

  petService
    .createPet(name, description, imageURL, category)
    .then(() => {
      notify.showInfo("Pet created.");
      context.redirect("#/home");
    })
    .catch(function() {
      notify.handleError(error);
    });
};

handler.getAllPets = function(context) {
  context.isAuth = userService.isAuth();
  context.username = sessionStorage.getItem("username");
  let filter = context.params.category.slice(1);

  petService
    .getAllPets(filter)
    .then(response => {
      context.otherPets = response;

      return context.loadPartials({
        header: "/views/common/header.hbs",
        footer: "/views/common/footer.hbs",
        otherPet: "/views/pet/otherPet.hbs"
      });
    })
    .then(function() {
      this.partial("/views/pet/dashboard.hbs");
    })
    .catch(function(error) {
      notify.handleError(error);
    });
};

handler.getMyPets = function(context) {
  context.isAuth = userService.isAuth();
  context.username = sessionStorage.getItem("username");
  let userId=sessionStorage.getItem('_id');
  petService.getMyPets(userId).then(response => {
    context.myPets = response;

    return context
      .loadPartials({
        header: "/views/common/header.hbs",
        footer: "/views/common/footer.hbs",
        myPet:"/views/pet/myPet.hbs"
      })
      .then(function() {
        this.partial('/views/pet/myPets.hbs');
      });
  });
};

handler.petPet=async function(context){
    let id=context.params.id;
}

handler.removePet=function(context){
  context.loadPartials({
    header: "/views/common/header.hbs",
    footer: "/views/common/footer.hbs"
  }).then(function(){
    this.partial('/views/pet/deletePet.hbs');
  })
}

header.loadMyPet=function(context){
  return  petService.getById(context.params.petId)
  .then(pets => {
    if(pets[0]._acl.creator != sessionStorage.getItem('id')){
      throw new Error('This pet is not yours!');
    }
    Object.assign(context, pets[0]);
    context.loadPartials({
          header: "/views/common/header.hbs",
            footer: "/views/common/footer.hbs"
        }).then(function(){
          this.partial('/views/pet/deletePet.hbs');
        }).then(() => {
          petService.removePet(context.params.id)
        .then(function(){
          notify.showInfo('Song removed successfully');
          context.redirect('#/home')
        })
        })
  })
}
// handler.removePet=function(context){
//   context.loadPartials({
//     header: "/views/common/header.hbs",
//       footer: "/views/common/footer.hbs"
//   }).then(function(){
//     this.partial('/views/pet/deletePet.hbs');
//   }).then(() => {
//     petService.removePet(context.params.id)
//   .then(function(){
//     notify.showInfo('Song removed successfully');
//     context.redirect('#/home')
//   })
//   })
// }
