const FETCH_URL = 'http://localhost:4200/api/';
export default class UserServices {
    checkUserNameValidity = (uname) => {
        return fetch(FETCH_URL + 'username/' + uname)
            .then(res => {
                    return res.json();
                }
            );
    };

    getProfile = () => {
        return fetch(FETCH_URL + 'profile')
            .then(res => {
                    return res.json();
                }
            );
    };

    findById = userID => {
        let url = FETCH_URL + 'user/' + userID;
        fetch(url)
            .then(response => {
                alert('response from service: ' + response)
                return response.json()
            });
    }
}
