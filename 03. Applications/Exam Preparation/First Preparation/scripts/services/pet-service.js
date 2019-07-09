const petService=(() => {

    function createPet(name, description, imageURL, category){
        return kinvey.post('appdata', 'pets', 'kinvey', {
            name,
            description,
            imageURL,
            category,
            likes:0
        });
    }

    function getAllPets(filter){
        let query=filter != null && filter != 'All'
         ? {category:filter} : {};
        let endpoint=`pets?query=${JSON.stringify(query)}&sort={"likes": -1}`;
        return kinvey.get('appdata', endpoint, 'kinvey');
    }

    function getMyPets(userId){
        return kinvey.get('appdata', `pets?query={"_acl.creator":"${userId}"}`, 'kinvey');
    }

    function removePet(id){
        console.log(id);
        return kinvey.remove('appdata', `pets/${id}`, 'kinvey');
    }
    return {
        createPet,
        getAllPets,
        getMyPets,
        removePet
    }

})();