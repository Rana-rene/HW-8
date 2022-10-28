let inpElement = document.getElementById("inp");
let subElement = document.getElementById("sub");
let formElement = document.getElementById("git");


formElement.addEventListener('input', () => {

    let test = inpElement.value
    let url = "https://api.github.com/users/" + test;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(userData => {
            const userName = userData.login;
            const avatar = userData.avatar_url;
            const blog = userData.blog;
            const created = userData.created_at;
            console.log(userName);
            console.log(avatar);

            let divElement = document.getElementsById("div");
            let paraElement = document.createElement("p");
            divElement.appendChild(paraElement);
            
            paraElement.innerHTML = `<img src=${avatar} alt="User Avatar">`;
            
           


        })
        .catch(err => {
            console.error(err.message);
        });

})




