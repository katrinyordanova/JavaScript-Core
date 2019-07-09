const userService=(() => {
    function isAuth(){
       return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(response){
        sessionStorage.setItem('username', response.username);
        sessionStorage.setItem('authtoken', response._kmd.authtoken);
        sessionStorage.setItem('_id', response._id);
    }

    function register(username, password){
        return kinvey.post('user', '', 'basic', {
            username,
            password
        })
    }

    function login(username,password){
        return kinvey.post('user', 'login', 'basic', {
            username,
            password
        });
    }

    function logout(){
        return kinvey.post('user', '_logout', 'kinvey');
    }

    return {
        isAuth, 
        saveSession,
        register,
        login,
        logout
    }
})();