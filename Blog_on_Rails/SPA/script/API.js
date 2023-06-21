const baseUrl = 'http://127.0.0.1:3000/api/v1/'

async function get(path){
    try {
        const response = await fetch(baseUrl + path)
        return response.json()
    } catch (error) { 
        console.error(error)
    }
};

async function req(path, reqBody, method) {
    try {
        let options = {
            method: method || "POST",
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                "mode": 'cors'
            },
            body: JSON.stringify(reqBody)
        }
        const response = await fetch(baseUrl + path , options)
        return response.json();

    } catch (error) {
        console.log(error)
    }
};

const webApi = { get, req };

export default webApi;