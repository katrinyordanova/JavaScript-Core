const postsService=(() => {
    function getAllPosts() {
        return kinvey.get('appdata','posts','kinvey');
    }

   return{
       getAllPosts
   }
})();