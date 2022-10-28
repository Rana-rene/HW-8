const data = {
    name: "RENE",
    countries: [
        {
            name: "USA",
            year: 2019
        },
        {
            name: "MXC",
            year: 2022
        }
    ]
};



fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message);
    });