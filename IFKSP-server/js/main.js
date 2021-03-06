// Get data from the server.
function getServerData(url) {
    let fetchOptions = {
        method: "Get",
        mode: "cors",
        cahce: "no-cache"
    };

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}

getServerData("http://localhost:3000/users").then(
    data => console.log(data)
);
    