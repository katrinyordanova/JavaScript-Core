const songService=(() => {

    function getSongs(){
        return kinvey.get('appdata','songs', 'kinvey', '?query={}&sort={"likes":-1}');
    }

    function createSong(title,artist,imageUrl){
        return kinvey.post('appdata', 'songs', 'kinvey',{
            title,
            artist,
            imageURL:imageUrl,
            likes:0,
            listened:0
        })
    }

    function getAllMySongs(){
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}`);
    }
    
    function removeSong(id){
        return kinvey.remove('appdata', `songs/${id}`, 'kinvey');
    }

    function likeSong(id, song){
        return kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    function getSong(id){
        return kinvey.get('appdata', `songs/${id}`, 'kinvey');
    }

    function listenSong(id, song){
        return kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    return {
        createSong,
        getSongs,
        getAllMySongs,
        removeSong,
        likeSong,
        getSong,
        listenSong
    }
})();