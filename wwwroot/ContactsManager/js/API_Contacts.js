//const API_URL = "https://api-server-5.glitch.me/api/contacts";
const API_URL = "http://localhost:5000/maths";
let currentHttpError = "";

function API_getcurrentHttpError () {
    return currentHttpError; 
}

function webAPI_getMaths(id) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "/" + contactId,
            success: contact => { currentHttpError = ""; resolve(contact); },
            error: (xhr) => { currentHttpError = xhr.responseJSON.error_description; resolve(null); }
        });
    });
}