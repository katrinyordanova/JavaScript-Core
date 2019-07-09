const kinvey=(() =>{
    const baseUrl='https://baas.kinvey.com/';
    const appKey='kid_HJ6mer5t4';
    const appSecret='73dab41697c941cca53f9709b96a2010';

    function makeAuth(auth) {
        if (auth == 'basic'){
            return{
                'Authorization':`Basic ${btoa(appKey + ':' + appSecret)}`
            }
        }else{
            return {
                'Authorization':`Kinvey ${sessionStorage.getItem('authtoken')}`
            }
        }
    }

    function makeRequest(method, collection, endpoint, auth) {
        return {
            url:baseUrl + collection + '/' + appKey + '/' + endpoint,
            method,
            headers:makeAuth(auth)
        }
    }

    function get(collection,endpoint,auth) {
        return $.ajax(makeRequest('GET',collection,endpoint,auth));
    }

    function post(collection,endpoint,auth,data) {
        let request=makeRequest('POST',collection,endpoint,auth);
        request.data=data;
        return $.ajax(request);
    }

    function update(collection,endpoint,auth,data) {
        let request=makeRequest('PUT', collection, endpoint, auth);
        request.data=data;
        return $.ajax(request);
    }
    
    function remove(collection, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', collection, endpoint, auth));
    }

    return{
        get,
        post,
        update,
        remove
    }
})();

