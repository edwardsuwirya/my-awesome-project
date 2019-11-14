export function validateUserName(userName) {
    return fetch(process.env.REACT_APP_WS_URL + '/auth/userName', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify({
            'userName': userName
        })
    });
}

export function validatePassword(id,password) {
    return fetch(process.env.REACT_APP_WS_URL + '/auth/password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify({
            'id': id,
            'password':password
        })
    });
}