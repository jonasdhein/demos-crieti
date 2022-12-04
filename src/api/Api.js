async function getUsers() {
    const response = await fetch('http://177.44.248.30:3333/users', {
        method: 'GET',
        headers: getHeaders()
    });
    const json = await response.json();

    if (json) {
        return json;
    } else {
        return json.message;
    }
}