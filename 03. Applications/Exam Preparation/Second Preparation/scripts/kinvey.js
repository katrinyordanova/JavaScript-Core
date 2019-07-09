const kinvey= (() => {
const baseUrl='https://baas.kinvey.com/';
const appKey='kid_rk1PIh3YE';
const appSecret='441937fe05f84dbf862427e4da2af99f';

function makeAuth(auth){
    if(auth == 'basic'){
        return {
            'Authorization': `Basic ${btoa(appKey + ':' + appSecret)}`
        }
    }else{
        return {
            'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
        }
    }
}

function makeRequest(method, collection, endpoint, auth){
    return {
        method,
        url:baseUrl + collection + '/' + appKey + '/' + endpoint,
        headers: makeAuth(auth)
    }
}

function get(collection, endpoint, auth, query){
    if(query){
        endpoint+=query;
    }
    return $.ajax(makeRequest('GET', collection, endpoint, auth));
}

function post(collection, endpoint, auth, data){
    let request=makeRequest('POST', collection, endpoint, auth);
    request.data=data;
    return $.ajax(request);
}

function update(collection, endpoint, auth, data){
    let request=makeRequest('PUT', collection, endpoint, auth);
    request.data=data;
    return $.ajax(request);
}

function remove(collection, endpoint, auth){
    return $.ajax(makeRequest('DELETE', collection, endpoint, auth));
}

return{
    get,
    post,
    update,
    remove
}
})();