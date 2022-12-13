import axios from "axios";
const base64 = require('base-64');

export const apiUserService = {
    authUser,
    getUsers,
    postUser,
    putUser,
    deleteUser
}

async function authUser(user, pass) {
    try {
        const response = await axios.get('/auth', {
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(user + ":" + pass)
            }
        });

        if (response.status == 200) {
            return response.data;
        } else {
            return null;
        }

    } catch (error) {
        console.log('ERR_getUsers=>', error)
        return null;
    }
}

async function getUsers() {
    try {
        const response = await axios.get('/users');

        if (response.status == 200) {
            return response.data;
        } else {
            return null;
        }

    } catch (error) {
        console.log('ERR_getUsers=>', error)
        return null;
    }
}

async function postUser(payload) {
    try {

        const response = await axios({
            method: 'post',
            url: '/users',
            data: payload
        })

        if (response.status == 200) {

            return response.data;

        } else {
            return null;
        }

    } catch (error) {
        console.log('ERR_postUser=>', error)
        return null;
    }
}

async function putUser(payload) {
    try {

        const response = await axios({
            method: 'put',
            url: `/users/${user.id}`,
            data: payload
        })

        if (response.status == 200) {

            return response.data;

        } else {
            return null;
        }

    } catch (error) {
        console.log('ERR_putUser=>', error)
        return null;
    }
}

async function deleteUser(id) {
    try {

        const response = await axios.delete(`/users/${id}`);

        if (response.status === 200) {
            return true;
        } else {
            return null;
        }

    } catch (error) {
        Alert.alert('Erro ao excluir');
    }
}