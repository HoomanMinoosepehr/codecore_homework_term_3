const baseUrl = 'http://127.0.0.1:3000/api/v1/';

async function get(path) {
    const response = await fetch(baseUrl + path, { credentials: 'include'} )
    return response.json()
}

async function req(path, body, method) {
    const options = {
        method: method || 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + path, options);
    return response.json()
}

const webApi = { get, req };

export const User = {

    create(body) {
        return webApi.req('users', body)
    },

    current() {
        return webApi.get('users/current')
    }
    
};

export const Sessions = {
    create(body) {
        return webApi.req('sessions', body)
    },
    destroy(){
        return webApi.req("sessions", {}, "DELETE")
    }
};

export const Recipe = {

    index() {
        return webApi.get('recipes')
    },

    create(body) {
        return webApi.req('recipes', body)
    },

    show(id){
        return webApi.get(`recipes/${id}`)
    },

    delete(id){
        return webApi.req(`recipes/${id}`, null, 'DELETE')
    }

}


export const Review = {

    create(recipe_id, body) {
        return webApi.req(`recipes/${recipe_id}/reviews`, body)
    }

}