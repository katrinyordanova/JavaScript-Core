const userService=(() => {

    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(response) {
        sessionStorage.setItem('username',response.username);
        sessionStorage.setItem('authtoken', response._kmd.authtoken)
    }

    function register(username,password) {
        return kinvey.post('user','','basic',{
            username,
            password
        })
    }
    
    function login(username,password) {
        return kinvey.post('user', 'login', 'basic',{
            username,
            password
        })
    }
    
    function logout() {
        return kinvey.post('user','_logout','kinvey');
    }

    return{
        register,
        login,
        logout,
        saveSession,
        isAuth
    }
})();