import axios from "axios";

export async function getUsers() {
    try {
        const response = await axios.get('/users');

        if (response.status == 200) {
            return response.data;
        } else {
            return null;
        }

        /*const response = await fetch('http://177.44.248.30:3333/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(username + ":" + password)
            }
        });
        const json = await response.json();*/

        /*const options = {
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(username + ":" + password)
            }
        }*/
    } catch (error) {
        console.log('ERR_getUsers=>', error)
        return null;
    }
}